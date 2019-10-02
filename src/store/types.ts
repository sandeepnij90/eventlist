export interface IStore {
    user: IUser
}

export interface IUser {
    name: string
    email: string
    optedIn: boolean
    postcode: string
}

export const SEND_USER = "SEND_USER"
export const RESET_USER = "RESET_USER"
export const SAVE_USER = "SAVE_USER"
export const SEND_EMAIL = "SEND_EMAIL"


 export interface ISendUserAction {
    type: typeof SEND_USER,
    user: { name: string, email: string }
}

export interface ISendEmailAction {
    type: typeof SEND_EMAIL,
    email: string
}


 export interface IResetUserAction {
    type: typeof RESET_USER,
}

 export interface ISaveUserAction {
    type: typeof SAVE_USER,
    data: { postcode: string, optedIn: boolean }
}




export type ActionTypes = ISendUserAction | ISendEmailAction| IResetUserAction | ISaveUserAction