import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlinkoSchema } from '../types/plinko';

const initialState: PlinkoSchema = {
    settings: {
        gameFinished: false,
        gameStarted: false,
        newGameInited: false,
        canUpdateBalance: false,
    },
};

const plinkoSlice = createSlice({
    name: 'plinko',
    initialState,
    reducers: {
        changeGameStarted: (state, action: PayloadAction<boolean>) => {
            state.settings.gameStarted = action.payload;
        },
        changeGameFinished: (state, action: PayloadAction<boolean>) => {
            state.settings.gameFinished = action.payload;
        },
        changeNewGameInited: (state, action: PayloadAction<boolean>) => {
            state.settings.newGameInited = action.payload;
        },
        changeCanUpdateBalance: (state, action: PayloadAction<boolean>) => {
            state.settings.canUpdateBalance = action.payload;
        },
    },
});

export const { actions: plinkoActions } = plinkoSlice;
export const { reducer: plinkoReducer } = plinkoSlice;
