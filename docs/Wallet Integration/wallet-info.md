---
sidebar_position: 1
---

# Wallet Info

### Displaying Wallet Connection Status

This section demonstrates how to access and display information about the connected wallet, including its connection status and public key.

### What This Does:

- connected tells us if the wallet is connected.
- publicKey gives us the wallet’s unique address in Solana.
- If no wallet is connected, it displays a message saying so.

```tsx
"use client";

import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Docstest() {
  const { connected, publicKey, wallet } = useWallet();
  console.log("wallet", wallet);
  return (
    <div className="flex flex-col items-center justify-center  text-white p-8">
      <div className=" p-6 rounded-lg shadow-lg w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Wallet Information</h1>

        {connected ? (
          <>
            <WalletMultiButton className="mb-4" />

            <p className="text-lg font-semibold text-green-400">
              Wallet connected: {wallet?.adapter?.name}
            </p>
            <p className="text-sm break-all text-gray-300 mt-2">
              <strong>Public Key:</strong> {publicKey?.toBase58()}
            </p>
          </>
        ) : (
          <div>
            <WalletMultiButton className="mb-4" />
            <p className="text-gray-400">No wallet connected</p>
          </div>
        )}
      </div>
    </div>
  );
}
```
