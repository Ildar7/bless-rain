interface PlinkoSettings {
    gameStarted: boolean;
    gameFinished: boolean;
    newGameInited: boolean;
    canUpdateBalance: boolean;
}

export interface PlinkoSchema {
    settings: PlinkoSettings;
}
