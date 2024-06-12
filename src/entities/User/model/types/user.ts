interface UserPublicMetrics {
    like_count: number;
    tweet_count: number;
    listed_count: number;
    followers_count: number;
    following_count: number;
}

interface UserTelegramPhoto {
    big_file_id: string;
    big_file_unique_id: string;
    small_file_id: string;
    small_file_unique_id: string;
}

interface UserTelegramData {
    accent_color_id: number;
    active_usernames: string[];
    bio: string | null;
    emoji_status_custom_emoji_id: string | null;
    first_name: string;
    has_private_forwards: boolean;
    id: number;
    photo: UserTelegramPhoto | null;
    type: string;
    username: string;
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
    telegram_data: UserTelegramData | null;
    telegram_id: string | null;
    referral_code: string;
    referrer_id: null | string | number;
}

export interface UserInfo {
    success: boolean;
    data: UserData;
}

export interface UserSchema {
    data?: UserInfo;
    isLoading: boolean;
    error?: string;
    balance: number;
}
