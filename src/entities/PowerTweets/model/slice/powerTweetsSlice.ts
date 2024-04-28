import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PowerTweetsInfo, PowerTweetsSchema } from '../types/powerTweets';
import { fetchPowerTweets } from '../services/fetchPowerTweets/fetchPowerTweets';

const initialState: PowerTweetsSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const powerTweetsSlice = createSlice({
    name: 'powerTweets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPowerTweets.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPowerTweets.fulfilled, (state, action: PayloadAction<PowerTweetsInfo>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchPowerTweets.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: powerTweetsActions } = powerTweetsSlice;
export const { reducer: powerTweetsReducer } = powerTweetsSlice;
