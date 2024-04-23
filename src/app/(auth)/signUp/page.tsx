"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { loginUser, registerUser } from "@/utils/authLogic";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setAuthTokens, setUser } from "@/redux/authSlice";
import { jwtDecode } from "jwt-decode";
import { RootState } from "@/redux/store";

function Copyright(props: any) {
  
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://supermadrsa.com/">
        Super Madrsa
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp() {
  
  const { register, handleSubmit, watch, formState:{errors} } = useForm();
  
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState)=>state.auth.user);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(()=>{
    const storedAuthTokens = localStorage.getItem('Tokens');
    if(storedAuthTokens){
      const authTokens = JSON.parse(storedAuthTokens);
      dispatch(setAuthTokens(authTokens));
      dispatch(setUser(jwtDecode(authTokens.access)));
      router.push('/dashboard/');
      setLoading(true);
    }
    
    if(user){
      router.push('/dashboard/');
    }else{
      setLoading(true) ;
    }
    
  },[]);
  const onSubmit = async (data: any) => {
    const res = await registerUser(data);
    if (res){
      const loginRes = await loginUser({phone_number: data.phone_number, password: data.password});
    if (loginRes){
      localStorage.setItem('Tokens', JSON.stringify(loginRes)); 
      
        dispatch(setAuthTokens(loginRes));
        dispatch(setUser(jwtDecode(loginRes.access)));
        console.log(jwtDecode(loginRes.access));
        router.push('/dashboard');
     
        }
      }
  };
  return (
    !user && loading &&
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          حساب جديد
        </Typography>
       
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                required
                fullWidth
                {...(errors.first_name &&({color: "error"}))}
                {...register("first_name",{required: true,maxLength: 20})}
                name="first_name"
                id="firstName"
                label="الاسم الاول"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                {...(errors.last_name &&({color: "error"}))}
                {...register("last_name",{required: true, maxLength: 20})}
                id="lastName"
                label="اسم العائلة"
                name="last_name"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              

              <TextField
                required
                fullWidth
                {...(errors.email &&({color: "error"}))}
                {...register("email", {required: true, pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}
               
                id="email"
                label="البريد الإلكتروني"
                name="email"
                autoComplete="email"
              />
            
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                {...(errors.phone_number &&({color: "error"}))}
                {...register("phone_number",{required: true, pattern: /^[0-9]+$/,minLength: 11, maxLength:17})}
                id="phoneNumber"
                label="رقم التليفون"
                name="phone_number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                {...(errors.password &&({color: "error"}))}
                {...register("password",{required: true, pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/})}
                name="password"
                label="كلمة السر"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="تلقي عروض عبر البريد"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            تسجيل
          </Button>
          <Grid  container justifyContent="flex-start">
            <Grid  item>
              <Link  href="#" variant="body2">
                معايا حساب بالفعل؟ تسجيل الدخول
              </Link>
            </Grid>
          </Grid>
        </Box>
        
        
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}