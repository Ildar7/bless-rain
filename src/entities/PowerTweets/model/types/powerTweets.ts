export interface PowerTweetsData {
    id: number;
    tweet: string;
}

export interface PowerTweetsInfo {
    success: boolean;
    data: PowerTweetsData[];
}

export interface PowerTweetsSchema {
    data?: PowerTweetsInfo;
    isLoading: boolean;
    error?: string;
}
