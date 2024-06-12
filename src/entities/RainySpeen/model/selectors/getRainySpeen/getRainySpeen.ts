import { StateSchema } from 'app/providers/StoreProvider';

export const getRainySpeenBtnPressed = (state: StateSchema) => state.rainySpeen?.settings.btnPressed;
export const getRainySpeenGameStarted = (state: StateSchema) => state.rainySpeen?.settings.gameStarted;
export const getRainySpeenNewGameInited = (state: StateSchema) => state.rainySpeen?.settings.newGameInited;
export const getRainySpeenGameFinished = (state: StateSchema) => state.rainySpeen?.settings.gameFinished;
export const getRainySpeenCanUpdateBalance = (state: StateSchema) => state.rainySpeen?.settings.canUpdateBalance;
