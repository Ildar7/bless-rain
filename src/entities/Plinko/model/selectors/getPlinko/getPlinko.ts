import { StateSchema } from 'app/providers/StoreProvider';

export const getPlinkoGameStarted = (state: StateSchema) => state.plinko?.settings.gameStarted;
export const getPlinkoNewGameInited = (state: StateSchema) => state.plinko?.settings.newGameInited;
export const getPlinkoGameFinished = (state: StateSchema) => state.plinko?.settings.gameFinished;
export const getPlinkoCanUpdateBalance = (state: StateSchema) => state.plinko?.settings.canUpdateBalance;
