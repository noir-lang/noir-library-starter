#!/usr/bin/env bash
set -eu

export PORT=8095

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    yarn install
fi

# Build TypeScript first
echo "Building TypeScript..."
yarn build

# Start TypeScript RPC server in background
echo "Starting TypeScript RPC server..."
yarn start &
TS_SERVER_PID=$!
trap 'kill $TS_SERVER_PID' EXIT

# Wait for server to start
sleep 2

project_dir="$(dirname "$0")/.."

# Run the Noir tests with oracle resolver
nargo --program-dir="$project_dir" test --oracle-resolver http://localhost:${PORT}
