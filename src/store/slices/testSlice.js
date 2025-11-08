import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    testNow: 'Выберите тест',
};

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        choiceTest: (state, action) => {
            state.testNow = action.payload;
        },
        resetTest: (state) => {
            state.testNow = 'Выберите тест';
        },
    },
});

export const { choiceTest, resetTest } = testSlice.actions;
export default testSlice.reducer;