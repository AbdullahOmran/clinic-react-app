import axios from "axios";
import { setAuthTokens, setUser } from "@/redux/authSlice";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "@/redux/store";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";

const useAxios = () => {
  const baseURL = "http://127.0.0.1:8000/";
  const authTokens = useSelector((state: RootState) => state.auth.authTokens);
  const dispatch = useDispatch();
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${authTokens?.access}`,
    },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    const user: any = jwtDecode(authTokens.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    if (!isExpired) return req;
    try {
      const res = await axios.post(`${baseURL}api/auth/refresh/`, {
        refresh: authTokens.refresh,
      });
      localStorage.setItem('authTokens', JSON.stringify(res.data));
      dispatch(setAuthTokens(res.data));
      dispatch(setUser(jwtDecode(res.data.access)));
      req.headers.Authorization = `Bearer ${res.data.access}`
    } catch (err) {
      console.log(err);
    }
    return req;
  });
  return axiosInstance;
};
export default useAxios;
