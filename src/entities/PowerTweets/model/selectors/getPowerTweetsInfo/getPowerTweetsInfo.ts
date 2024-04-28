import { StateSchema } from 'app/providers/StoreProvider';

export const getPowerTweetsData = (state: StateSchema) => state.powerTweets?.data;
export const getPowerTweetsIsLoading = (state: StateSchema) => state.powerTweets?.isLoading;
export const getPowerTweetsError = (state: StateSchema) => state.powerTweets?.error;
