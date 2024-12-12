import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
    count: 0,
    showCounter: false,
}

const counterSlice = createSlice({
    name: "Counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        increase(state, action) {
            state.count = state.count - action.payload.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
})

const intialAuthState = {
    isAuthenticated: false,
}

const authSlice = createSlice({
    name:'Authentication slice',
    initialState: intialAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;