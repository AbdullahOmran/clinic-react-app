import { RootState } from "@/redux/store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import useAxios from "@/utils/useAxios";
import { patientState } from "@/redux/patientSlice";
import { useDispatch } from "react-redux";
import { appendAlert } from "@/redux/userSlice";

// const endpoints = [
//         'token/',
//         'token/refresh/',
//         'user/',
//         'doctor/',
//         'secretary/',
//         'patient/<int:pk>/',
//         'patient/',
//         'appointment/<int:pk>/',
//         'appointment/',
//         'treatment/<int:pk>/',
//         'treatment/',
//         'clinic/<int:pk>/',
// ];



const usePatient = ()=>{
    const patientData: patientState  = useSelector((state:RootState)=>state.patient);
    const dispatch = useDispatch();
    const api = useAxios();
    const submitData = async()=>{

        const pname = patientData.name?.trim();
        const fname = pname?.split(' ')[0];
        const lname = pname?.split(' ').slice(1).reduce((t,v)=>{return t+v});
        const submittedData = {
            first_name: fname,
            last_name: lname,
            gender: patientData.gender?.toUpperCase().at(0),
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
            contact_number: patientData.phone,
            email:patientData.email,
            marital_status:patientData.maritalStatus?.toUpperCase().at(0),
        };
    
        try{
            const res = await api.post('api/patient/', submittedData);
            if( res.status == 200 ){
                dispatch(appendAlert(['Patient added successfully','filled','info']));
            }
        }catch(e){

        }
    };
    
    
    return {
        submit:submitData,
    };
};

export default usePatient;


