import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import { MainPage } from 'pages/MainPage';
import { RatingPage } from 'pages/RatingPage';
import { RulesPage } from 'pages/RulesPage';
import { GamesPage } from 'pages/GamesPage';
import { RainySpeenPage } from 'pages/RainySpeenPage';
import { PlinkoPage } from 'pages/PlinkoPage';
import { TapPage } from 'pages/TapPage';
import { EarnPage } from 'pages/EarnPage';
import {
    AppRoutes, getRouteEarn,
    getRouteGames,
    getRouteMain,
    getRoutePlinko,
    getRouteRainySpeen,
    getRouteRating,
    getRouteRules,
    getRouteTap,
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
    [AppRoutes.GAMES]: {
        path: getRouteGames(),
        element: <GamesPage />,
    },
    [AppRoutes.RAINY_SPEEN]: {
        path: getRouteRainySpeen(),
        element: <RainySpeenPage />,
    },
    [AppRoutes.PLINKO]: {
        path: getRoutePlinko(),
        element: <PlinkoPage />,
    },
    [AppRoutes.TAP]: {
        path: getRouteTap(),
        element: <TapPage />,
    },
    [AppRoutes.EARN]: {
        path: getRouteEarn(),
        element: <EarnPage />,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
