export enum AppRoutes {
    MAIN = 'main',
    RATING = 'rating',
    RULES = 'rules',
    GAMES = 'games',
    RAINY_SPEEN = 'rainy_speen',

    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteRating = () => '/rating';
export const getRouteRules = () => '/rules';
export const getRouteGames = () => '/games';
export const getRouteRainySpeen = () => '/games/rainy-speen';
