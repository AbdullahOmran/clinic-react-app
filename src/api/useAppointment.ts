import { setAvailability, setBufferTime, setDuration, setMaxAppointments } from "@/redux/appointmentSettingsSlice";
import { setAppointments } from "@/redux/appointmentSlice";
import { RootState } from "@/redux/store";
import { appendAlert } from "@/redux/userSlice";
import useAxios from "@/utils/useAxios";
import { useDispatch, useSelector } from "react-redux";

export interface appointmentObj {
  doctor: number;
  secretary: number;
  patient: number;
  date: string;
  time: string;
}

const useAppointment = () => {
  const dispatch = useDispatch();
  const api = useAxios();
  const appointmentData = useSelector((state: RootState) => state.appointment);
  const appointmentSettingsData = useSelector((state: RootState) => state.appointmentSettings);

  const submit = async () => {
    const submittedData = {
      doctor: appointmentData.doctorId,
      secretary: appointmentData.secretaryId,
      patient: appointmentData.patientId,
      date: appointmentData.date,
      time: appointmentData.time,
    };
    try {
      const res = await api.post("api/appointment/", submittedData);
      if (res.status == 201) {
        dispatch(
          appendAlert(["Appointment added successfully", "filled", "info"])
        );
      }
    } catch (e) {}
  };

  const getAppointments = async () => {
    try {
      const res = await api.get("api/appointment/");
      if (res.status == 200) {
        dispatch(setAppointments(res.data));
      }
    } catch (e) {}
  };
  const getAppointmentSettings  = async()=>{
    try{
      const res1 = await api.get("api/settings/appointment-settings/");
      if(res1.status === 200){
        dispatch(setMaxAppointments(res1.data.max_appointments));
        dispatch(setDuration(res1.data.duration));
      }

      const res2 = await api.get("api/settings/availability/");
      if(res2.status === 200){
        const availabilityData = {...res2.data, days: res2.data.days.split(",")}
        dispatch(setAvailability(availabilityData));
      }
      const res3 = await api.get("api/settings/buffer-time/");
      if(res3.status === 200){
        dispatch(setBufferTime(res3.data));
      }
    }catch(e){}
  };

  const submitAppointmentSettings  = async()=>{
    try{

      const res1 = await api.put("api/settings/appointment-settings/",{
        duration:appointmentSettingsData.duration,
        max_appointments:appointmentSettingsData.maxAppointments,
      });
      const res2 = await api.put("api/settings/buffer-time/",appointmentSettingsData.bufferTime);
      const availabilityData = {
        ...appointmentSettingsData.availability,
        days:appointmentSettingsData.availability.days?.join(",")
      };
      const res3 = await api.put("api/settings/availability/",availabilityData);
      if(res1.status === 200 && res2.status === 200 && res3.status === 200){
     
      }
    }catch(e){}
  };

  return {
    submit: submit,
    getAppointments: getAppointments,
    getAppointmentSettings: getAppointmentSettings,
    submitAppointmentSettings: submitAppointmentSettings,
  };
};

export default useAppointment;
