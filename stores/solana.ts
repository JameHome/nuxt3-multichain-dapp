import { defineStore } from 'pinia'
// import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'
type Wallet = {
    name: string;
    url: string;
    icon: string;
    adapter: any;
};

export const useSolana = defineStore('solana', {
    state: () => ({
        wallet: null as Wallet | null,
    }),
    actions: {
        async getWallet() {
            // const { PhantomWalletAdapter } = await import('@solana/wallet-adapter-phantom')
            // this.wallet = {
            //     name: 'Phantom',
            //     url: 'https://phantom.app',
            //     icon: 'data:image/svg+xml;base64,...',
            //     adapter: new PhantomWalletAdapter()
            // }
        },
        setWallet(wallet: Wallet) {
            this.wallet = wallet
        },
        async connect() {
            try {
                if (!this.wallet) throw new Error('Wallet is not initialized');
                await this.wallet.adapter.connect()
            } catch (e) {
                console.error('连接 Phantom 失败:', e)
            }
        },
        async disconnect() {
            try {
                if (!this.wallet) return;
                await this.wallet.adapter.disconnect()
            } catch (e) {
                console.error('断开 Phantom 失败:', e)
            }
        }
    },
    persist: {
        // 推荐只持久化非敏感字段到 localStorage
        pick: [],
        // SSR 推荐使用 localStorage，避免 cookie 冲突
        storage: piniaPluginPersistedstate.localStorage()
    }
})