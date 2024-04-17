export interface ChatMessages {
    from: string;
    text: string;
    at: number;
    role: string;
}
export interface ChatSchema {
    messages: ChatMessages[];
    rulesModalOpen: boolean;
    chatOpened?: boolean;
}
