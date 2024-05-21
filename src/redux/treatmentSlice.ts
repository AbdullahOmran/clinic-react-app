
import { createSlice } from "@reduxjs/toolkit";


export interface TreatmentObj{
    id:number;
    date: string;
}
export interface treatmentState {
    id:number;
    date: string;
    treatments:TreatmentObj[];
}
const initialState: treatmentState = {
    id: -1,    
    date: '',
    treatments:[],
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
    setTreatments: (state, action)=>{
        state.treatments = action.payload;
    },
    appendTreatment: (state, action)=>{
        state.treatments.push(action.payload);
    },
    
  
  },
});

export const { 
    setTreatmentId,   
    setDate,
    setTreatments,
    appendTreatment, 
            } = treatmentSlice.actions;
export default treatmentSlice.reducer;