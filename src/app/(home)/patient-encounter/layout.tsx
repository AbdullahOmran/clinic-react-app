
import styles from './layout.module.scss';
import PatientEncounterSubNav from '@/components/PageTemplate/PageComponent/patientEncounter/patientEncounterSubNav/PatientEncounterSubNav';
import type { Metadata } from 'next';



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

 export default function Layout({children,}:{children: React.ReactNode;}){
      
    return(
      <div className={styles.container}>
      <PatientEncounterSubNav/>
       {children}
      </div>
      );
 }

