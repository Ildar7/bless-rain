import { StateSchema } from 'app/providers/StoreProvider';

export const getChatRulesModalIsOpen = (state: StateSchema) => state.chat.rulesModalOpen;
