import { defineNuxtPlugin } from '#app'
// import SolanaWallets from "solana-wallets-vue";

// You can either import the default styles or create your own.
// import "solana-wallets-vue/styles.css";
// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// import {
//   PhantomWalletAdapter,
//   SolflareWalletAdapter,
// } from "@solana/wallet-adapter-wallets";
import { initWallet } from 'solana-wallets-vue'
import { solanaWallets } from '~/config/solana'

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    initWallet({
      wallets: solanaWallets,
      autoConnect: true, // optional
    })
  }
})