import { defineStore } from 'pinia'
import { useWallet } from 'solana-wallets-vue'
import type { PublicKey } from '@solana/web3.js'

export interface SolanaWalletState {
    isConnected: boolean
    isConnecting: boolean
    isDisconnecting: boolean
    publicKey: PublicKey | null
    address: string | null
    walletName: string | null
    error: string | null
    isInitialized: boolean
}

export const useSolanaWalletStore = defineStore('solanaWallet', {
    state: (): SolanaWalletState => ({
        isConnected: false,
        isConnecting: false,
        isDisconnecting: false,
        publicKey: null,
        address: null,
        walletName: null,
        error: null,
        isInitialized: false
    }),

    getters: {
        shortAddress(): string | null {
            if (!this.address) return null
            return `${this.address.slice(0, 4)}...${this.address.slice(-4)}`
        },

        canConnect(): boolean {
            return this.isInitialized && !this.isConnecting && !this.isConnected
        },

        canDisconnect(): boolean {
            return this.isConnected && !this.isDisconnecting
        }
    },

    actions: {
        // 更新状态
        updateState(updates: Partial<SolanaWalletState>) {
            Object.assign(this, updates)
        },

        // 清除错误
        clearError() {
            this.error = null
        },

        // 重置状态
        reset() {
            this.isConnected = false
            this.isConnecting = false
            this.isDisconnecting = false
            this.publicKey = null
            this.address = null
            this.walletName = null
            this.error = null
        }
    },

    persist: {
        storage: persistedState.localStorage,
        pick: ['walletName'] // 只持久化钱包名称，其他状态重新获取
    }
})