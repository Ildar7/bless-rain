interface RainySpeenSettings {
    btnPressed: boolean;
    gameStarted: boolean;
    gameFinished: boolean;
    newGameInited: boolean;
    canUpdateBalance: boolean;
}

export interface RainySpeenSchema {
    settings: RainySpeenSettings;
}
