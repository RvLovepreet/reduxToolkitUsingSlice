import {createSlice} from '@reduxjs/toolkit';
export const counterSlice = createSlice({
  name: 'counter1',
  initialState: {
    value: 1,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      let a = parseInt(action.payload);
      state.value += a;
    },
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export const selectCount = state => {
  console.log(state.counter.value);
  return state.counter.value;
};

export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 2000);
};

export default counterSlice.reducer;
