import { StateSchema } from 'app/providers/StoreProvider';

export const getChatMessages = (state: StateSchema) => state.chat.messages;
