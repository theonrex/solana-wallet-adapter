import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
//     { type: "autogenerated", dirName: "." },

const sidebars: SidebarsConfig = {
  docs: [
    "introduction",
    {
      type: "category",
      label: "Overview",
      items: ["Overview/prerequisites", "Overview/getting-started"],
    },
     {
      type: "category",
      label: "Hooks",
      items: [
        {
          type: "category",
          label: "wallet-adapter-react",
          items: [
            "hooks/wallet-adapter-react/ConnectionProvider",
            "hooks/wallet-adapter-react/WalletModalProvider",
            // "hooks/wallet-adapter-react/errors",
            "hooks/wallet-adapter-react/useAnchorWallet",
            "hooks/wallet-adapter-react/useConnection",
            "hooks/wallet-adapter-react/useLocalStorage",
            "hooks/wallet-adapter-react/useWallet",
            "hooks/wallet-adapter-react/walletProvider",
          ],
        },

        {
          type: "category",
          label: "wallet-adapter-react-ui",
          items: [
            // "hooks/wallet-adapter-react-ui/BaseWalletConnectButton",
            // "hooks/wallet-adapter-react-ui/BaseWalletDisconnectButton",
            // "hooks/wallet-adapter-react-ui/BaseWalletMultiButton",
            // "hooks/wallet-adapter-react-ui/WalletConnectButton",
            "hooks/wallet-adapter-react-ui/WalletDisconnectButton",
            "hooks/wallet-adapter-react-ui/WalletIcon",
            "hooks/wallet-adapter-react-ui/WalletModal",
            // "hooks/wallet-adapter-react-ui/WalletModalButton",
            "hooks/wallet-adapter-react-ui/WalletModalProvider",
            "hooks/wallet-adapter-react-ui/WalletMultiButton",
            "hooks/wallet-adapter-react-ui/useWalletModal",
          ],
        },
        {
          type: "category",
          label: "wallet-adapter-wallets",
          items: ["hooks/wallet-adapter-wallets/allwallets"],
        },
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        "API Reference/ConnectionProvider",
        "API Reference/WalletModalProvider",
        "API Reference/walletProvider",
      ],
    },
    {
      type: "category",
      label: "Wallet Integration",
      collapsed: false,

      items: [
        "Wallet Integration/allwallets",
        "Wallet Integration/connect-button",
        "Wallet Integration/switch-wallet",
        "Wallet Integration/wallet-info",
      ],
    },
    {
      type: "category",
      label: "Examples",
      collapsible: true,
      collapsed: false,
      className: "red",
      link: {
        type: "generated-index",
        title: "Solana Wallet Adapter Examples",
        description:
          "Explore practical examples on how to integrate Solana wallets using @solana/wallet-adapter-react. These guides cover connecting wallets, handling balances, network version retrieval, and more.",
      },

      items: [
        "examples/connectAndDiscconct",
        "examples/customWalletButton",
        "examples/getSolanaNetwork",
        "examples/showWalletModa",
        "examples/supportedWallet",
        "examples/walletBlance",
        "examples/walletConnectionState",
      ],
    },

   
    {
      type: "category",
      label: "Demos",
      items: ["Demos/connectWallet"],
    },
  ],
};

export default sidebars;
