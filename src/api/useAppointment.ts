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
      const res = await api.get("api/settings/appointment/");
      if(res.status === 200){
        // do something
      }
    }catch(e){}
  };

  return {
    submit: submit,
    getAppointments: getAppointments,
    getAppointmentSettings: getAppointmentSettings,
  };
};

export default useAppointment;
