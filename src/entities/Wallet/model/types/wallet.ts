export interface WalletData {
    success: boolean;
    message: string;
}

export interface WalletSchema {
    data?: WalletData;
    isLoading: boolean;
    error?: string;
    verifyIsLoading: boolean;
    verifyError?: string;
}
