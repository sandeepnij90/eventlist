import { Dispatch, Action } from 'redux'
import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import { AppState } from './Reducer'
import { IUser } from 'store/types'
import { SAVE_USER, SEND_USER, SEND_EMAIL, RESET_USER, ISendUserAction, ISendEmailAction, ISaveUserAction, IResetUserAction  } from 'store/types'

export const sendUserAction = (user: {name: string, email: string}): ISendUserAction => {
    return {
        type: SEND_USER,
        user
    }
}

export const sendEmailAction = (email: string): ISendEmailAction => {
    return {
        type: SEND_EMAIL,
        email
    }
}

export const saveUserAction = (data: {postcode: string, optedIn: boolean}): ISaveUserAction => {
    return {
        type: SAVE_USER,
        data
    }
}

export const resetUserAction = (): IResetUserAction => {
    return {
        type: RESET_USER
    }
}


export const dispatchEmailAction = (data: IUser, history: any): ThunkAction<void, AppState, null, Action<string>> => async (dispatch: Dispatch) => {
    //mock API for dispatching email - was a bit confused on this section, would normall use axios to post data then redirect on success   

    /*
        const res = await axios.post('akkroo/api/send-email', {toAddress: data.email})
        if(res) {
            const saveUser = await axios.post('akkroo/api/save', {data})
            if (saveUser) {
                history.push('/thanks')
            }
        }

    */
    console.log({ data })
    history.push('/thanks')
}
