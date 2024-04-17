import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_IS_AUTH_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {
    account: {
        balance: 1000000,
    },
    email: '',
    name: 'Mishutkin',
    isAuth: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        initAuth: (state) => {
            if (localStorage.getItem(USER_IS_AUTH_LOCALSTORAGE_KEY)) {
                state.isAuth = localStorage.getItem(USER_IS_AUTH_LOCALSTORAGE_KEY) === 'true';
            }
        },
        signIn: (state) => {
            state.isAuth = true;
            localStorage.setItem(USER_IS_AUTH_LOCALSTORAGE_KEY, 'true');
        },
        logout: (state) => {
            state.isAuth = false;
            localStorage.removeItem(USER_IS_AUTH_LOCALSTORAGE_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
