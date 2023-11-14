import { createSlice } from "@reduxjs/toolkit";

interface CurrentState {
    userConnected: boolean
}

const initialState: CurrentState = {
    userConnected: false
}; 

export const slice = createSlice({
    name: "userConnected",
    initialState,
    reducers: {
        setUserConnected: (state) => {
            state.userConnected = true
        }
    }
});

export const { setUserConnected } = slice.actions;

export default slice.reducer;