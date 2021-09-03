import {USERS_LOADED, USER_ADDED, USER_PROP_CHANGED} from "../actions";

const initialUser = {name: '', email: '', phone: ''};
const initialState = {users: [], user: initialUser};

export const userReducer = (state = initialState, action) => {

    const {users, user} = state;
    const {type, payload} = action;

    switch (type) {

        case USERS_LOADED:
            return {...state, users: [...payload]};

        case USER_ADDED:
            return {...state, users: [...users, {...payload}], user: initialUser};

        case USER_PROP_CHANGED:
            return {...state, user: {...user, ...payload}};

        default:
            return state;
    }
};
