import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { UserInfo } from '../../types/user';

export const fetchUserInfo = createAsyncThunk<UserInfo, void, ThunkConfig<string>>(
    'user/fetchUserInfo',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<UserInfo>('/me');

            return response.data;
        } catch (err: any) {
            return rejectWithValue('ERROR');
        }
    },
);
