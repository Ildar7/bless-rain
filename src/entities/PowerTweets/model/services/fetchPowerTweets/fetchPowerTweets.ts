import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { PowerTweetsInfo } from '../../types/powerTweets';

export const fetchPowerTweets = createAsyncThunk<PowerTweetsInfo, void, ThunkConfig<string>>(
    'powerTweets/fetchPowerTweets',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<PowerTweetsInfo>('/pts');

            return response.data;
        } catch (err: any) {
            return rejectWithValue('ERROR');
        }
    },
);
