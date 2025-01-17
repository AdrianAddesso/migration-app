import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { InjectedConnector } from "@wagmi/core";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { chain, configureChains } from "wagmi";

export const providers = jsonRpcProvider({
  rpc: () => ({
    http:
      process.env.NODE_ENV !== "development"
        ? "http://127.0.0.1:8545"
        : "https://rpc.ankr.com/eth",
  }),
});

export const { chains, provider } = configureChains(
  [chain.mainnet],
  [providers]
);
export const injected = new InjectedConnector({ chains });

export const walletConnect = new WalletConnectConnector({
  options: {
    qrcode: true,
  },
});
