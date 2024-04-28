interface UserPublicMetrics {
    like_count: number;
    tweet_count: number;
    listed_count: number;
    followers_count: number;
    following_count: number;
}

export interface UserData {
    id: number;
    name: string;
    email: string;
    email_verified_at: null,
    created_at: string;
    updated_at: string;
    is_staff: number;
    twitter_id: string;
    twitter_data: string;
    public_metrics: UserPublicMetrics;
    wallet: string | null;
}

export interface UserInfo {
    success: boolean;
    data: UserData;
}

export interface UserSchema {
    data?: UserInfo;
    isLoading: boolean;
    error?: string;
}
