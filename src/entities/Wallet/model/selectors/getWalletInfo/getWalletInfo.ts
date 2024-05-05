import { StateSchema } from 'app/providers/StoreProvider';

export const getWalletData = (state: StateSchema) => state.wallet.data;
export const getWalletIsLoading = (state: StateSchema) => state.wallet.isLoading;
export const getWalletError = (state: StateSchema) => state.wallet.error;
export const getWalletVerifyIsLoading = (state: StateSchema) => state.wallet.verifyIsLoading;
export const getWalletVerifyError = (state: StateSchema) => state.wallet.verifyError;
