"use client";
import { PatientObj } from "@/api/usePatient";
import { createSlice } from "@reduxjs/toolkit";

export interface impressionType {
    symptom: string;
    diagnosis: string;
}
export interface patientState {
    action?: string;
    id: number;
    name?: string;
    gender?: string;
    age?: number;
    phone?: string;
    email?: string;
    address?: string;
    maritalStatus?: string;
    occupation?: string;
    education?: string;
    bloodGroup?: string;
    medicalHistory?: string;
    surgicalHistory?: string;
    historyOfPresentIllness?: string;
    medications?: string;
    allergies?: string;
    immuzinations?: string;
    riskFactors?: string;
    symptom?: string;
    diagnosis?: string;
    impression:impressionType[];
    patients: Array<PatientObj>;
}
const initialState: patientState = {
    action: "noSelection",
    id: -1,
    name: '',
    gender: '',
    age: 0,
    phone: '',
    email: '',
    address: '',
    maritalStatus: '',
    occupation: '',
    education: '',
    bloodGroup: '',
    medicalHistory: '',
    surgicalHistory: '',
    historyOfPresentIllness: '',
    medications: '',
    allergies: '',
    immuzinations: '',
    riskFactors:'',
    symptom:'',
    diagnosis:'',
    impression:[],
    patients: [],
};

export const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setAction:(state, action) => {
        state.action = action.payload;
    },
    setSymptom:(state, action) => {
        state.symptom = action.payload;
    },
    setDiagnosis:(state, action) => {
        state.diagnosis = action.payload;
    },
    setImpression:(state, action) => {
        state.impression = action.payload;
    },
    addImpression:(state, action) => {
        state.impression.push(action.payload);
    },
    updateImpressionDiagnosis:(state, action) => {
        const index = action.payload.id;
        state.impression[index] = {...state.impression[index], diagnosis:action.payload.diagnosis};
        
    },
    setId:(state, action)=>{
        state.id = action.payload
    },
    setName:(state, action) => {
        state.name = action.payload;
    },
    setGender:(state, action) => {
        state.gender = action.payload;
    },
    setAge:(state, action) => {
        state.age = action.payload;
    },
    setPhone:(state, action) => {
        state.phone = action.payload;
    },
    setEmail:(state, action) => {
        state.email = action.payload;
    },
    setAddress:(state, action) => {
        state.address = action.payload;
    },
    setMaritalStatus:(state, action) => {
        state.maritalStatus = action.payload;
    },
    setOccupation:(state, action) => {
        state.occupation = action.payload;
    },
    setEducation:(state, action) => {
        state.education = action.payload;
    },
    setBloodGroup:(state, action) => {
        state.bloodGroup = action.payload;
    },
    setMedicalHistory:(state, action) => {
        state.medicalHistory = action.payload;
    },
    setSurgicalHistory:(state, action) => {
        state.surgicalHistory = action.payload;
    },
    setHistoryOfPresentIllness:(state, action) => {
        state.historyOfPresentIllness = action.payload;
    },
    setMedications:(state, action) => {
        state.medications = action.payload;
    },
    setAllergies:(state, action) => {
        state.allergies = action.payload;
    },
    setImmuzinations:(state, action) => {
        state.immuzinations = action.payload;
    },
    setRiskFactors:(state, action) => {
        state.riskFactors = action.payload;
    },
    setPatients:(state, action) => {
        state.patients = action.payload;
    },
  },
});

export const {
    setAction,
    setId,
    setName,
    setDiagnosis,
    setImpression,
    setSymptom,
    setGender,
    setAge,
    setPhone,
    updateImpressionDiagnosis,
    addImpression,
    setEmail,
    setAddress,
    setMaritalStatus,
    setOccupation,
    setEducation,
    setBloodGroup,
    setMedicalHistory,
    setSurgicalHistory,
    setHistoryOfPresentIllness,
    setMedications,
    setAllergies,
    setImmuzinations,
    setRiskFactors,
    setPatients,
            } = patientSlice.actions;
export default patientSlice.reducer;
