import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const verifyWallet = createAsyncThunk<any, [string, string], ThunkConfig<string>>(
    'wallet/verifyWallet',
    async ([address, signature], thunkAPI) => {
        const {
            rejectWithValue, extra,
        } = thunkAPI;

        const data = {
            signature,
        };

        try {
            const response = await extra.api.post<any>(`/verifyWallet?wallet=${address}`, data);

            return response.data;
        } catch (err: any) {
            return rejectWithValue('ERROR');
        }
    },
);
