import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppPlayingMode, AppSchema } from '../types/app';

const initialState: AppSchema = {
    settings: {
        playing: {
            mode: 'null',
        },
    },
    isLoadingTapGifs: true,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setPlayingMode: (state, action: PayloadAction<AppPlayingMode>) => {
            state.settings.playing.mode = action.payload;
        },
        changeLoadingTapGifs: (state, action: PayloadAction<boolean>) => {
            state.isLoadingTapGifs = action.payload;
        },
    },
});

export const { actions: appActions } = appSlice;
export const { reducer: appReducer } = appSlice;
