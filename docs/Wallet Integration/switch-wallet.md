---
sidebar_position: 2
---

# Switch Wallet

This section covers how to provide the user with the option to select from a list of available wallets.

## What This Does:

- `wallets` provides the list of available wallets.
- `select()` lets us choose a wallet from the list.

```tsx
"use client";

import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletName } from "@solana/wallet-adapter-base";

export default function Docstest() {
  const { connected, select, wallets, publicKey, wallet } = useWallet();

  const handleSelectWallet = (walletName: string) => {
    select(walletName as WalletName);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Select Wallet</h2>

        {/* Show connected wallet details if a wallet is connected */}
        {publicKey ? (
          <div className="p-5 bg-gray-800 rounded-lg mb-6">
            <p className="text-lg font-semibold">Connected Wallet:</p>
            <p className="break-all text-sm text-gray-300 mt-2">
              <strong>Address:</strong> {publicKey.toBase58()}
            </p>
            <p className="text-sm text-gray-300 mt-1">
              <strong>Wallet Name:</strong> {wallet?.adapter.name}
            </p>
          </div>
        ) : (
          <p className="text-center text-gray-400 mb-6">No wallet connected</p>
        )}

        {/* List available wallets to choose from */}
        <h3 className="text-lg font-semibold mb-4 text-center">
          Available Wallets
        </h3>
        <ul className="space-y-3">
          {wallets.map((wallet) => (
            <li key={wallet.adapter.name}>
              <button
                onClick={() => handleSelectWallet(wallet.adapter.name)}
                className="w-full py-3 px-5 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-medium"
              >
                {wallet.adapter.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
```
