import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    resultTest: null,
};

const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        dispatchTestResult: (state, action) => {
            state.resultTest = action.payload;
        },
        dispatchResetResult: (state) => {
            state.resultTest = null;
        },
    },
});

export const { 
    dispatchTestResult, 
    dispatchResetResult 
} = resultSlice.actions;

export default resultSlice.reducer;