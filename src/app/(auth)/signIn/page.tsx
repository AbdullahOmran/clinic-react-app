"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import styles from "./page.module.scss";
import { loginUser } from "@/utils/authLogic";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { setAuthTokens, setUser } from "@/redux/authSlice";
import { useRouter } from "next/navigation";
import { RootState } from "@/redux/store";
import { useForm } from "react-hook-form";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link className={styles.link} href="https://medcy.com/">
        Medcy
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignIn() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);
  const [loading, setLoading] = React.useState(false);
  const [genericError, setGenericError] = React.useState(false);
  const [notFoundError, setNotFoundError] = React.useState(false);
  React.useEffect(() => {
    const storedAuthTokens = localStorage.getItem("Tokens");
    if (storedAuthTokens) {
      const authTokens = JSON.parse(storedAuthTokens);
      dispatch(setAuthTokens(authTokens));
      dispatch(setUser(jwtDecode(authTokens.access)));
      router.push("/dashboard/");
      setLoading(true);
    }

    if (user) {
      router.push("/dashboard/");
    } else {
      setLoading(true);
    }
  }, []);
  const onSubmit = async (data: any) => {
    const res = await loginUser(data);
    if (typeof res == "object") {
      localStorage.setItem("Tokens", JSON.stringify(res));

      dispatch(setAuthTokens(res));
      dispatch(setUser(jwtDecode(res.access)));
      router.push("/dashboard");
    } else if (res == 404) {
      setNotFoundError(true);
    } else if (res == 400) {
      setGenericError(true);
    }
  };

  return (
    !user &&
    loading && (
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
              Sign In
            </Typography>
            {notFoundError && (
              <Typography color="error" component="h6" variant="h6">
                The account does not exist
              </Typography>
            )}
            {genericError && (
              <Typography color="error" component="h6" variant="h6">
                An error occurred
              </Typography>
            )}
            <Box
             
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
              
                fullWidth
                {...(errors.username && { color: "error" })}
                id="username"
                {...register("username", { required: true })}
                helperText={
                  errors.username && (
                    <Typography color="error" component="span">
                      Please enter your username
                    </Typography>
                  )
                }
                label="username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                
                {...(errors.password && { color: "error" })}
                {...register("password", { required: true })}
                helperText={
                  errors.password && (
                    <Typography color="error" component="span">
                      Please enter your password
                    </Typography>
                  )
                }
                name="password"
                label="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link className={styles.link} href="#">
                   Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link className={styles.link} href="/signUp/">
                    Don't have account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    )
  );
}
