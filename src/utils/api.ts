import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import useAxios from "./useAxios";
import { patientState } from "@/redux/patientSlice";

const endpoints = [
        'token/',
        'token/refresh/',
        'user/',
        'doctor/',
        'secretary/',
        'patient/<int:pk>/',
        'patient/',
        'appointment/<int:pk>/',
        'appointment/',
        'treatment/<int:pk>/',
        'treatment/',
        'clinic/<int:pk>/',
];



export const submitPatientData = async ()=>{
    const patientData: patientState  = useSelector((state:RootState)=>state.patient);
    const submittedData = {
        first_name: patientData.name,
        gender: patientData.gender,
        address:patientData.address,
        education :patientData.education,
        occupation :patientData.occupation,
        surgical_history : patientData.surgicalHistory,
        present_illness_history :patientData.historyOfPresentIllness,
        medical_history:patientData.medicalHistory,
        medications : patientData.medications,
        allergies : patientData.allergies,
        immuzinations: patientData.immuzinations ,
        blood_group:patientData.bloodGroup,
        date_of_birth:'',
        contact_number: patientData.phone,
        email:patientData.email,
        marital_status:patientData.maritalStatus,
    };

    const api = useAxios();
    const res = await api.post('/', patientData);
    alert(res.data);

}



