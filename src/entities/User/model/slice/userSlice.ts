import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema, UserInfo } from '../types/user';
import { fetchUserInfo } from '../services/fetchUserInfo/fetchUserInfo';

const initialState: UserSchema = {
    data: undefined,
    isLoading: true,
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
                // const info = {
                //     success: true,
                //     data: {
                //         id: 13,
                //         name: 'Ildar Valiev',
                //         email: 'ildarvaliev167@nomail.com',
                //         email_verified_at: null,
                //         created_at: '2024-04-28T15:02:32.000000Z',
                //         updated_at: '2024-05-04T14:19:09.000000Z',
                //         is_staff: 0,
                //         twitter_id: '2989324499',
                //         twitter_data: '{"id":"2989324499","nickname":"ildarvaliev167","name":"Ildar Valiev","email":null,"avatar":"https:\\\/\\\/pbs.twimg.com\\\/profile_images\\\/1673643983237439492\\\/QJawEx-u_normal.jpg","user":{"id":"2989324499","username":"ildarvaliev167","name":"Ildar Valiev","profile_image_url":"https:\\\/\\\/pbs.twimg.com\\\/profile_images\\\/1673643983237439492\\\/QJawEx-u_normal.jpg"},"attributes":{"id":"2989324499","nickname":"ildarvaliev167","name":"Ildar Valiev","avatar":"https:\\\/\\\/pbs.twimg.com\\\/profile_images\\\/1673643983237439492\\\/QJawEx-u_normal.jpg"},"token":"NDVUX3NpYl80RzE4bEgtVzdCMXBad0EtendSS19JMGtXVHFaWUt4c3p4MDdvOjE3MTQ4MzIzNDgyNjg6MToxOmF0OjE","refreshToken":null,"expiresIn":7200,"approvedScopes":["users.read","tweet.read"]}',
                //         public_metrics: {
                //             like_count: 5,
                //             tweet_count: 22,
                //             listed_count: 0,
                //             followers_count: 9,
                //             following_count: 73,
                //         },
                //         wallet: null,
                //         telegram_id: '414861096',
                //         telegram_data: {
                //             id: 414861096,
                //             bio: '\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 (dApp, web3). Front-end.',
                //             type: 'private',
                //             photo: {
                //                 big_file_id: 'AQADAgADv6cxGyhHuhgACAMAAyhHuhgABFXT0RnV8TISNAQ',
                //                 small_file_id: 'AQADAgADv6cxGyhHuhgACAIAAyhHuhgABFXT0RnV8TISNAQ',
                //                 big_file_unique_id: 'AQADv6cxGyhHuhgB',
                //                 small_file_unique_id: 'AQADv6cxGyhHuhgAAQ',
                //             },
                //             username: 'IldarValiev7',
                //             first_name: '\u0418\u043b\u044c\u0434\u0430\u0440',
                //             accent_color_id: 6,
                //             active_usernames: [
                //                 'IldarValiev7',
                //             ],
                //             has_private_forwards: true,
                //             emoji_status_custom_emoji_id: '5246792792516082598',
                //         },
                //         referrer_id: null,
                //         referral_code: '8056cdfe60',
                //     },
                // };
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
