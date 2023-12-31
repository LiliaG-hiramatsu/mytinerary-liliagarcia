import { createReducer } from "@reduxjs/toolkit";
import user_actions from "../actions/users";

const { signup, signin, signin_token, logout } = user_actions

const initial_state = {
    user: {},
    token: '',
    messages: []
}

const user_reducer = createReducer(
    initial_state,
    builder => builder.addCase(
        signup.fulfilled,
        (state, action) => {
            let new_state = {
                ...state,
                user: action.payload.user,
                messages: action.payload.messages
            }
            return new_state
        }
    ).addCase(
        signin.fulfilled,
        (state, action) => {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                messages: action.payload.messages
            }
            return new_state
        }
    ).addCase(
        signin_token.fulfilled,
        (state, action) => {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
            return new_state
        }
    ).addCase(
        logout.fulfilled,
        (state, action) => {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
            return new_state
        }
    )
)

export default user_reducer