import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppAuthModalView, AppPlayingMode, AppSchema } from '../types/app';

const initialState: AppSchema = {
    settings: {
        playing: {
            mode: 'null',
        },
    },
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setPlayingMode: (state, action: PayloadAction<AppPlayingMode>) => {
            state.settings.playing.mode = action.payload;
        },
    },
});

export const { actions: appActions } = appSlice;
export const { reducer: appReducer } = appSlice;
