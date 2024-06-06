import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppPlayingMode, AppSchema } from '../types/app';

const initialState: AppSchema = {
    settings: {
        playing: {
            mode: 'null',
        },
        sidebarOpened: false,
    },
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setPlayingMode: (state, action: PayloadAction<AppPlayingMode>) => {
            state.settings.playing.mode = action.payload;
        },
        toggleVisibleSidebar: (state) => {
            state.settings.sidebarOpened = !state.settings.sidebarOpened;
        },
    },
});

export const { actions: appActions } = appSlice;
export const { reducer: appReducer } = appSlice;
