
"use client";
import { appendEncounter, setEncounters } from "@/redux/encounterSlice";
import { RootState } from "@/redux/store";
import { setDate, setTreatmentId } from "@/redux/treatmentSlice";
import { appendAlert } from "@/redux/userSlice";
import useAxios from "@/utils/useAxios";
import dayjs from "dayjs";
import { RSC } from "next/dist/client/components/app-router-headers";
import { useDispatch, useSelector } from "react-redux";

export interface EncounterObj {
  treatmentId: number;
  goals: string;
}

const useEncounter = () => {
  const dispatch = useDispatch();
  const api = useAxios();
  const patient = useSelector((state:RootState)=>state.patient);
  const user = useSelector((state:RootState)=>state.auth.user);
  const treatment = useSelector((state:RootState)=>state.treatment);
  const submit = async (data: any) => {
    
    const submittedData = {
      treatment: treatment.id,
      goals: data.goals,
    };
    try {
      
      const res = await api.post("api/treatment/encounter/", submittedData);
      
      if (res.status == 201) {
       
        dispatch(appendAlert(["Encounter created successfully", "filled", "info"]));
        dispatch(appendEncounter({...res.data,goals: res.data.goals.split(",")}));
      }
    } catch (e) {}
  };
  const getEncounters = async () => {
    
    try {
      
      const res = await api.get("api/treatment/encounter/");
      
      if (res.status == 200) {
       
        const encounters = res.data.map((obj: any)=>({...obj, goals: obj.goals.split(',')}));
        dispatch(setEncounters(encounters));
      }
    } catch (e) {}
  };
  return {
    submit: submit,
    getEncounters: getEncounters,
  };
};

export default useEncounter;
