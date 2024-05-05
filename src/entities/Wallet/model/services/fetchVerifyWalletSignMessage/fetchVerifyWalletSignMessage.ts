import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { WalletData } from '../../types/wallet';

export const fetchVerifyWalletSignMessage = createAsyncThunk<WalletData, string, ThunkConfig<string>>(
    'wallet/fetchVerifyWalletSignMessage',
    async (address, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<WalletData>(`/verifyWallet?wallet=${address}`);

            return response.data;
        } catch (err: any) {
            return rejectWithValue('ERROR');
        }
    },
);
