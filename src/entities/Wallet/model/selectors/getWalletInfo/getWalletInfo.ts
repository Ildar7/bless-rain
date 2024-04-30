import { StateSchema } from 'app/providers/StoreProvider';

export const getWalletData = (state: StateSchema) => state.wallet?.data;
export const getWalletIsLoading = (state: StateSchema) => state.wallet?.isLoading;
export const getWalletError = (state: StateSchema) => state.wallet?.error;
