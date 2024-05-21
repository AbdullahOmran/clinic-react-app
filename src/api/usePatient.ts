"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import useAxios from "@/utils/useAxios";
import {
  patientState,
  setAddress,
  setAge,
  setAllergies,
  setBloodGroup,
  setEducation,
  setEmail,
  setGender,
  setHistoryOfPresentIllness,
  setImmuzinations,
  setMaritalStatus,
  setMedicalHistory,
  setMedications,
  setName,
  setOccupation,
  setPatients,
  setPhone,
  setRiskFactors,
  setSurgicalHistory,
} from "@/redux/patientSlice";
import { useDispatch } from "react-redux";
import { appendAlert } from "@/redux/userSlice";
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
        return t + " " + v;
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
      if (patientData.action == "add") {
        const res = await api.post("api/patient/", submittedData);
        if (res.status == 201) {
          dispatch(
            appendAlert(["Patient added successfully", "filled", "info"])
          );
        } else {
        }
      } else if (patientData.action == "edit") {
        const res = await api.put(
          `api/patient/${patientData.id}/`,
          submittedData
        );
        if (res.status == 200) {
          dispatch(
            appendAlert(["Patient updated successfully", "filled", "info"])
          );
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
        dispatch(
          appendAlert(["Patient deleted successfully", "filled", "info"])
        );
      } else {
      }
    } catch (e) {
      dispatch(appendAlert(["Something went wrong", "filled", "error"]));
    }
  };

  const getPatient = async (pk: number) => {
    try {
      const res = await api.get(`api/patient/${pk}/`);
      if (res.status == 200) {
        dispatch(setName(res.data.first_name + " " + res.data.last_name));
        dispatch(setGender(res.data.gender));
        dispatch(setAge(res.data.age));
        dispatch(setPhone(res.data.contact_number));
        dispatch(setEmail(res.data.email));
        dispatch(setAddress(res.data.address));
        dispatch(setMaritalStatus(res.data.marital_status));
        dispatch(setOccupation(res.data.occupation));
        dispatch(setEducation(res.data.education));
        dispatch(setBloodGroup(res.data.blood_group));
        dispatch(setMedicalHistory(res.data.medical_history));
        dispatch(setSurgicalHistory(res.data.surgical_history));
        dispatch(
          setHistoryOfPresentIllness(res.data.history_of_present_illness)
        );
        dispatch(setMedications(res.data.medications));
        dispatch(setAllergies(res.data.allergies));
        dispatch(setImmuzinations(res.data.immuzinations));
        dispatch(setRiskFactors(res.data.risk_factors));
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
    getPatient: getPatient,
  };
};

export default usePatient;
