import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema, UserInfo } from '../types/user';
import { fetchUserInfo } from '../services/fetchUserInfo/fetchUserInfo';

const initialState: UserSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserInfo.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchUserInfo.fulfilled, (state, action: PayloadAction<UserInfo>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchUserInfo.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
