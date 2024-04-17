import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CHAT_OPENED_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ChatMessages, ChatSchema } from '../types/chat';

const initialState: ChatSchema = {
    messages: [
        {
            from: 'Mishutkin',
            text: 'I could not wait for you to come clear the cupboards',
            at: 1692492614010,
            role: 'admin',
        },
    ],
    rulesModalOpen: false,
    chatOpened: undefined,
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addNewMessage: (state, action: PayloadAction<ChatMessages[]>) => {
            state.messages = action.payload;
        },
        openModal: (state) => {
            state.rulesModalOpen = true;
        },
        closeModal: (state) => {
            state.rulesModalOpen = false;
        },
        initChatOpened: (state) => {
            if (localStorage.getItem(CHAT_OPENED_LOCALSTORAGE_KEY)) {
                state.chatOpened = localStorage.getItem(CHAT_OPENED_LOCALSTORAGE_KEY) === 'true';
            } else if (window.innerWidth >= 1920) {
                state.chatOpened = true;
                localStorage.setItem(CHAT_OPENED_LOCALSTORAGE_KEY, 'true');
            } else {
                state.chatOpened = false;
                localStorage.setItem(CHAT_OPENED_LOCALSTORAGE_KEY, 'false');
            }
        },
        openChat: (state) => {
            state.chatOpened = true;
            localStorage.setItem(CHAT_OPENED_LOCALSTORAGE_KEY, 'true');
        },
        closeChat: (state) => {
            state.chatOpened = false;
            localStorage.setItem(CHAT_OPENED_LOCALSTORAGE_KEY, 'false');
        },
    },
});

export const { actions: chatActions } = chatSlice;
export const { reducer: chatReducer } = chatSlice;
