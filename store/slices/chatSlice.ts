// store/slices/counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";
 
//create the type of the initial CounterState Value that is going to be passed in
interface ChatState {
  value: boolean;
}
//our initial counter state is o
const initialState: ChatState = {
  value:false
};
 
const chatSlice = createSlice({
//name of the slice
  name: "Chatbox",
  //the initial state
  initialState,
  //the reducer functions
  reducers: {
  //add + 1
    activate: (state) => {
      state.value = true;
    },
   //add - 1 
    diactivate: (state) => {
      state.value = false;
    },
  },
});

//export the reducers from counterSlice.actions
export const { activate, diactivate } = chatSlice.actions;
//export the counterSlice.reducer
export default chatSlice.reducer;