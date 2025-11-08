import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    startTestConfig: null,
    startTestConfigTimerID: null,
};

const testConfigSlice = createSlice({
    name: 'testConfig',
    initialState,
    reducers: {
        startTestConfig: (state, action) => {
            state.startTestConfig = action.payload;
        },
        startTestConfigTimer: (state, action) => {
            state.startTestConfigTimerID = action.payload;
        },
        resetTestConfig: (state) => {
            state.startTestConfig = null;
            state.startTestConfigTimerID = null;
        },
    },
});

export const { 
    startTestConfig, 
    startTestConfigTimer, 
    resetTestConfig 
} = testConfigSlice.actions;

export default testConfigSlice.reducer;