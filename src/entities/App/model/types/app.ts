export type AppPlayingMode = 'null' | 'rules' | 'rating';
export type AppAuthModalView = 'login' | 'register';

interface AppSettingsPlaying {
    mode: AppPlayingMode;
}
interface AppSettings {
    playing: AppSettingsPlaying;
}
export interface AppSchema {
    settings: AppSettings;
}
