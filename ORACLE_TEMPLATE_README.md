# Simple Noir Oracle Template

Basic template for Noir oracle servers.

## Quick Start

1. Install: `yarn install`
2. Start: `yarn start`
3. Test: `curl http://localhost:8095/health`

## Usage

Replace the dummy functions in `oracle_server.ts` with your actual logic:

```typescript
function handleExampleFunction1(inputs: string[][]): ForeignCallResult {
  // Your actual implementation here
  return { values: ["your_result"] };
}
```

## API

- `POST /` - JSON-RPC endpoint for oracle calls
- `GET /health` - Health check

