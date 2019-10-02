import { SEND_USER, SEND_EMAIL, SAVE_USER, RESET_USER, IStore, ActionTypes } from './types'
import { createSelector } from 'reselect'

const initialState: IStore = {
    user: {
        name: '',
        email: '',
        optedIn: false,
        postcode: ''
    }
}

export const Reducer = (state = initialState, action: ActionTypes) => {
    switch(action.type) {
        case SEND_USER: {
            const { name, email } = action.user
            return { ...state, user:{ ...state.user, name, email } }
        }
        case SEND_EMAIL: {
            return { ...state, user: { ...state.user, email: action.email } }
        }

        case SAVE_USER : {
            return { ...state, user: { ...state.user, postcode: action.data.postcode, optedIn: action.data.optedIn}}
        }

        case RESET_USER : {
            return initialState
        }
        
        default: return state
    }
}

 export const getUser = (state: IStore) => state.user

//  export const getEmail = createSelector(getUser, user => {
//     return user.email
//  })


 export type AppState = ReturnType<typeof Reducer>


