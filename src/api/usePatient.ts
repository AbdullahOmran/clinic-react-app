import { RootState } from "@/redux/store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import useAxios from "@/utils/useAxios";
import { patientState, setPatients } from "@/redux/patientSlice";
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
export interface PatientObj {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  age: number;
  address: string;
  education: string;
  occupation: string;
  surgical_history: string;
  present_illness_history: string;
  medical_history: string;
  medications: string;
  allergies: string;
  immuzinations: string;
  blood_group: string;
  contact_number: string | number;
  email: string;
  marital_status: string;
}

const usePatient = () => {
  const patientData: patientState = useSelector(
    (state: RootState) => state.patient
  );
  const dispatch = useDispatch();
  const api = useAxios();
  const submitData = async () => {
    const pname = patientData.name?.trim();
    const fname = pname?.split(" ")[0];
    const lname = pname
      ?.split(" ")
      .slice(1)
      .reduce((t, v) => {
        return t +' '+ v;
      });
    const submittedData = {
      first_name: fname,
      last_name: lname,
      gender: patientData.gender?.toUpperCase().at(0),
      address: patientData.address,
      education: patientData.education,
      occupation: patientData.occupation,
      surgical_history: patientData.surgicalHistory,
      present_illness_history: patientData.historyOfPresentIllness,
      medical_history: patientData.medicalHistory,
      medications: patientData.medications,
      allergies: patientData.allergies,
      immuzinations: patientData.immuzinations,
      blood_group: patientData.bloodGroup,
      contact_number: patientData.phone,
      email: patientData.email,
      marital_status: patientData.maritalStatus?.toUpperCase().at(0),
    };

    try {
      if (patientData.action == 'add') {

          const res = await api.post("api/patient/", submittedData);
          if (res.status == 200) {
            dispatch(appendAlert(["Patient added successfully", "filled", "info"]));
          } else {
          }
      }else if(patientData.action == 'edit'){
        const res = await api.put(`api/patient/${patientData.id}/`, submittedData);
          if (res.status == 200) {
            dispatch(appendAlert(["Patient updated successfully", "filled", "info"]));
          } else {
          }
      }
    } catch (e) {
      dispatch(appendAlert(["Something went wrong", "filled", "error"]));
    }
  };
  const getPatients = async () => {
    try {
      const res = await api.get("api/patient/");
      if (res.status == 200) {
        dispatch(setPatients(res.data));
      } else {
      }
    } catch (e) {
      dispatch(appendAlert(["Something went wrong", "filled", "error"]));
    }
  };
  const deletePatient = async (pk: number) => {
    try {
        const res = await api.delete(`api/patient/${pk}/`);
        if (res.status == 204) {
            dispatch(appendAlert(["Patient deleted successfully", "filled", "info"]));
        } else {
        }
      } catch (e) {
        dispatch(appendAlert(["Something went wrong", "filled", "error"]));
      }
  };
  return {
    submit: submitData,
    getPatients: getPatients,
    deletePatient: deletePatient,
  };
};

export default usePatient;
