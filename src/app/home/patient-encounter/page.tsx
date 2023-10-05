"use client";
import { useDispatch, useSelector } from 'react-redux';
import styles from './page.module.scss';
import { RootState } from '@/redux/store';
import { setActiveSideMenuItem } from '@/redux/doctorSlice';
function PatientEncounter() {
   //  const doctor = useSelector((state: RootState)=>state.doctor);
     const dispatch = useDispatch();
     dispatch(setActiveSideMenuItem(1));
    return(
        <div className={styles.container}>
        
        </div>
        );
}
export default PatientEncounter;