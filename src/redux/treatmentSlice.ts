
import { createSlice } from "@reduxjs/toolkit";

export interface treatmentState {
    id:number;
    date: string;
 
}
const initialState: treatmentState = {
    id: -1,    
    date: '',
};

export const treatmentSlice = createSlice({
  name: "treatment",
  initialState,
  reducers: {
    setTreatmentId: (state, action)=>{
        state.id = action.payload;
    },
    
    setDate: (state, action)=>{
        state.date = action.payload;
    },
  
  },
});

export const { 
    setTreatmentId,   
    setDate,
            } = treatmentSlice.actions;
export default treatmentSlice.reducer;