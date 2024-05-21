
"use client";
import { RootState } from "@/redux/store";
import { setDate, setTreatmentId, setTreatments } from "@/redux/treatmentSlice";
import { appendAlert } from "@/redux/userSlice";
import useAxios from "@/utils/useAxios";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import useEncounter from "./useEncounter";

export interface TreatmentObj {
  doctor: number;
  patient: number;
  date: string;
}

const useTreatment = () => {
  const dispatch = useDispatch();
  const api = useAxios();
  const patient = useSelector((state:RootState)=>state.patient);
  const user = useSelector((state:RootState)=>state.auth.user);
  const impressions = useSelector((state:RootState)=>state.patient.impression);
  
  const submit = async () => {
    
    const submittedData = {
      doctor: user?.doctor_id,
      patient: patient.id,
      date: dayjs().format("YYYY-MM-DD"),
    };
    try {
      
      const res = await api.post("api/treatment/", submittedData);
      
      if (res.status == 201) {
       
        dispatch(appendAlert(["Treatment created successfully", "filled", "info"]));
        const treatmentId = res.data.id;
        dispatch(setTreatmentId(treatmentId));
        dispatch(setDate(res.data.date));
        const impressionsData = impressions.map((obj)=>({...obj,treatment: treatmentId }));
        const res2 = await api.post("api/treatment/symptom-diagnosis/", impressionsData);
        return true;
      }
      
    } catch (e) {}
  };
  const getTreatments = async () => {
    
   
    try {
      
      const res = await api.get("api/treatment/");
      
      if (res.status == 200) {
        dispatch(setTreatments(res.data));
      }
    } catch (e) {}
  };
  return {
    submit: submit,
    getTreatments: getTreatments,
  };
};

export default useTreatment;
