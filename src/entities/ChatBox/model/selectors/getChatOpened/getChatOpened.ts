import { StateSchema } from 'app/providers/StoreProvider';

export const getChatOpened = (state: StateSchema) => state.chat.chatOpened;
