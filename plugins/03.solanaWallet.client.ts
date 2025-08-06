import "solana-wallets-vue/styles.css";
import SolanaWallets from "solana-wallets-vue";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";

const walletOptions = {
  wallets: [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter({ network: WalletAdapterNetwork.Devnet }),
  ],
  autoConnect: false, // 关闭自动连接，手动处理重连
  localStorageKey: "solana-wallets",
  onError(error: Error) {
    console.error("Wallet error:", error);
  }
};

export default defineNuxtPlugin((nuxtApp) => {
  console.log("SolanaWallets plugin initialized");
  nuxtApp.vueApp.use(SolanaWallets, walletOptions);
});