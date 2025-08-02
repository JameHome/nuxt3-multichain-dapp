// import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'
// import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare'
// const { BaseWalletAdapter } = await import('@solana/wallet-adapter-base')
// const { PhantomWalletAdapter } = await import('@solana/wallet-adapter-phantom')
// const { SolflareWalletAdapter } = await import('@solana/wallet-adapter-solflare')
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
export const solanaWallets = [
    new PhantomWalletAdapter(),
    // new SolflareWalletAdapter(),
    // new BaseWalletAdapter()
]