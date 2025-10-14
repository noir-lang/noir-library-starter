#!/usr/bin/env node

// Oracle Server Template
// Replace dummy functions with actual logic

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Basic types
interface ForeignCallInfo {
  function: string;
  inputs: string[][];
}

interface ForeignCallResult {
  values: string[];
}

// Express app setup
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Main endpoint
app.post("/", async (req, res) => {
  const { method, params, id } = req.body;
  
  if (method === "resolve_foreign_call") {
    const result = await handleForeignCall(params || []);
    res.json({ jsonrpc: "2.0", id, result });
  } else {
    res.json({ jsonrpc: "2.0", id, error: { code: -32601, message: "Method not found" } });
  }
});

async function handleForeignCall(params: any[]): Promise<ForeignCallResult> {
  const [callInfo] = params as [ForeignCallInfo];
  const { function: functionName, inputs } = callInfo;
  
  // Add your oracle functions here
  if (functionName === "exampleFunction1") {
    return handleExampleFunction1(inputs);
  } else if (functionName === "exampleFunction2") {
    return handleExampleFunction2(inputs);
  } else {
    throw new Error(`Unknown function: ${functionName}`);
  }
}

// Replace these with your actual implementations
function handleExampleFunction1(inputs: string[][]): ForeignCallResult {
  // Template: replace with your actual logic
  return { values: ["0x1234567890abcdef"] };
}

function handleExampleFunction2(inputs: string[][]): ForeignCallResult {
  // Template: replace with your actual logic
  return { values: ["0x" + Math.floor(Math.random() * 1000000).toString(16)] };
}

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Start server
const PORT = process.env.PORT || 8095;
app.listen(PORT, () => {
  console.log(`Oracle server running on port ${PORT}`);
});
