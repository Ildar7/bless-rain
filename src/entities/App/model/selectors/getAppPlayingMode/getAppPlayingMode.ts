import { StateSchema } from 'app/providers/StoreProvider';

export const getAppPlayingMode = (state: StateSchema) => state.app.settings.playing.mode;
