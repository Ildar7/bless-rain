import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import { MainPage } from 'pages/MainPage';
import { RatingPage } from 'pages/RatingPage';
import { RulesPage } from 'pages/RulesPage';
import { AccountPage } from 'pages/AccountPage';
import {
    AppRoutes, getRouteAccount, getRouteMain, getRouteRating, getRouteRules,
} from '../../const/router';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.RATING]: {
        path: getRouteRating(),
        element: <RatingPage />,
    },
    [AppRoutes.RULES]: {
        path: getRouteRules(),
        element: <RulesPage />,
    },
    [AppRoutes.ACCOUNT]: {
        path: getRouteAccount(),
        element: <AccountPage />,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
