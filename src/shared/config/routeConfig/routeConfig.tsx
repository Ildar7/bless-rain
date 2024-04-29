import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import { MainPage } from 'pages/MainPage';
import { RatingPage } from 'pages/RatingPage';
import { RulesPage } from 'pages/RulesPage';
import {
    AppRoutes, getRouteMain, getRouteRating, getRouteRules,
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

    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
