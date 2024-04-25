"use client";
import { useDispatch } from "react-redux";

import { setActiveSideMenuItem } from "@/redux/userSlice";
import { Button, Divider, Grid, Paper, Slider, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Container, { ContainerProps } from "@mui/material/Container";

export default function Settings() {
  const dispatch = useDispatch();
  dispatch(setActiveSideMenuItem(6));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
  }));

  return (
    <Stack sx={{ paddingTop: "24px" }} spacing={2}>
      <Typography variant="h4" component="h4">
        Settings
      </Typography>
      <Paper>
        <Stack
          divider={<Divider orientation="horizontal" flexItem />}
          
        >
          <Item elevation={0}>
            <Typography variant="h5" component="h5">
              User Account
            </Typography>
          </Item>

          <Item elevation={0}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Typography variant="h6" component="h6">
                  Username
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Button variant="outlined">change</Button>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" component="h6">
                  Password
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Button variant="outlined">change</Button>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" component="h6">
                  Profile Picture
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Button variant="outlined">change</Button>
              </Grid>
            </Grid>
          </Item>

          <Item sx={{ textAlign: "right" }} elevation={0}>
            <Button sx={{ marginRight: "16px" }} variant="contained">
              Save Changes
            </Button>
          </Item>
        </Stack>
      </Paper>
      <Paper>
        <Stack
          divider={<Divider orientation="horizontal" flexItem />}
          
        >
          <Item elevation={0}>
            <Typography variant="h5" component="h5">
              Appointment
            </Typography>
          </Item>

          <Item elevation={0}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              
              <Grid item xs={6}>
                <Typography variant="h6" component="h6">
                  Available Time
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Button variant="outlined">change</Button>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" component="h6">
                   Buffer Time
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Button variant="outlined">change</Button>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" component="h6">
                  Duration
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" component="h6">
                   Max Bookings
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
              </Grid>
            </Grid>
          </Item>

          <Item sx={{ textAlign: "right" }} elevation={0}>
            <Button sx={{ marginRight: "16px" }} variant="contained">
              Save Changes
            </Button>
          </Item>
        </Stack>
      </Paper>
    </Stack>
  );
}
