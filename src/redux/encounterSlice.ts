
import { createSlice } from "@reduxjs/toolkit";


export interface EncounterObj{
    id:number;
    goals: string[];
}

export interface encounterState {
    encounterId:number;
    encounters: EncounterObj[];
}
const initialState: encounterState = {
    encounterId: -1,
    encounters: [],
};

export const encounterSlice = createSlice({
  name: "encounter",
  initialState,
  reducers: {
    setEncounterId: (state, action)=>{
        state.encounterId = action.payload;
    },
    setEncounters: (state, action)=>{
        state.encounters = action.payload;
    },
    appendEncounter: (state, action)=>{
        state.encounters.push(action.payload);
    },
    
   
  
  },
});

export const { 
    setEncounterId,
    setEncounters,   
    appendEncounter,    
            } = encounterSlice.actions;
export default encounterSlice.reducer;