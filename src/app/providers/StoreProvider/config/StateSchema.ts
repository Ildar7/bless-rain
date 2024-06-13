import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { To } from '@remix-run/router';
import { NavigateOptions } from 'react-router/dist/lib/context';
import { UserSchema } from 'entities/User';
import { AppSchema } from 'entities/App';
import { PowerTweetsSchema } from 'entities/PowerTweets';
import { WalletSchema } from 'entities/Wallet';
import { RainySpeenSchema } from 'entities/RainySpeen';
import { PlinkoSchema } from 'entities/Plinko';

export interface StateSchema {
    user: UserSchema;
    app: AppSchema;
    wallet: WalletSchema;

    // async-reducers
    powerTweets?: PowerTweetsSchema;
    rainySpeen?: RainySpeenSchema;
    plinko?: PlinkoSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
}
