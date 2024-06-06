import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RainySpeenSchema } from '../types/rainySpeen';

const initialState: RainySpeenSchema = {
    settings: {
        btnPressed: false,
        gameFinished: false,
        gameStarted: false,
        newGameInited: false,
        canUpdateBalance: false,
    },
    balance: 5000,
};

const rainySpeenSlice = createSlice({
    name: 'rainySpeen',
    initialState,
    reducers: {
        changeBtnPressed: (state, action: PayloadAction<boolean>) => {
            state.settings.btnPressed = action.payload;
        },
        changeGameStarted: (state, action: PayloadAction<boolean>) => {
            state.settings.gameStarted = action.payload;
        },
        changeGameFinished: (state, action: PayloadAction<boolean>) => {
            state.settings.gameFinished = action.payload;
        },
        changeNewGameInited: (state, action: PayloadAction<boolean>) => {
            state.settings.newGameInited = action.payload;
        },
        changeBalance: (state, action: PayloadAction<number>) => {
            state.balance = action.payload;
        },
        changeCanUpdateBalance: (state, action: PayloadAction<boolean>) => {
            state.settings.canUpdateBalance = action.payload;
        },
    },
});

export const { actions: rainySpeenActions } = rainySpeenSlice;
export const { reducer: rainySpeenReducer } = rainySpeenSlice;
