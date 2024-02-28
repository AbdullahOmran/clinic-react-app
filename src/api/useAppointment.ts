import { RootState } from "@/redux/store";
import { appendAlert } from "@/redux/userSlice";
import useAxios from "@/utils/useAxios";
import { useDispatch, useSelector } from "react-redux";

const useAppointment = () => {
  const dispatch = useDispatch();
  const api = useAxios();
  const appointmentData = useSelector((state: RootState) => state.appointment);

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
      if (res.status == 200) {
        dispatch(
          appendAlert(["Appointment added successfully", "filled", "info"])
        );
      }
    } catch (e) {}
  };

  return {
    submit: submit,
  };
};

export default useAppointment;
