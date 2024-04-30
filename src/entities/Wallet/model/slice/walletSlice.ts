import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WalletSchema, WalletData } from '../types/wallet';
import { fetchVerifyWalletSignMessage } from '../services/fetchVerifyWalletSignMessage/fetchVerifyWalletSignMessage';

const initialState: WalletSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
};

const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchVerifyWalletSignMessage.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchVerifyWalletSignMessage.fulfilled, (state, action: PayloadAction<WalletData>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchVerifyWalletSignMessage.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: walletActions } = walletSlice;
export const { reducer: walletReducer } = walletSlice;
