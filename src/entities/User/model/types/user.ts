interface UserAccount {
    balance: number;
}
export interface UserSchema {
    account: UserAccount;
    email: string;
    name: string;
    isAuth: boolean;
}
