import React, { useState } from "react";
import PageLayout from "layouts/PageLayout";
import {
  Box,
  withStyles,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  InputLabel,
  Input,
  Button,
  CircularProgress,
} from "@material-ui/core";
import Visibility from "components/Icons/Visibility";
import VisibilityOff from "components/Icons/VisibilityOff";
import { useHistory } from "react-router";

const Styles = () => {
  return {
    form: {
      maxWidth: "700px",
    },
    inputRoot: {
      width: "100%",
      marginTop: "0",
    },
  };
};

const DoctorSignup = ({ classes }) => {
  const [form, setForm] = useState({
    data: {
      full_name: "",
      email: "",
      temp_doctor_id: "",
      speciality: "",
      status: "",
      password: "",
    },
    showPassword: false,
    loading: false,
    errors: {},
    message: "",
  });
  const router = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    Object.keys(form.data).forEach((name) => {
      if (!form.data[name]) errors[name] = "Required";
    });
    if (Object.keys(errors).length) {
      setForm((prevForm) => ({
        ...prevForm,
        errors,
      }));
    }
    setForm((prevForm) => ({ ...prevForm, loading: true }));
    setTimeout(() => {
      setForm((prevForm) => ({
        ...prevForm,
        loading: false,
        message: `Welcome ${prevForm.data.full_name}`,
      }));
    }, 5000);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({
      ...prevForm,
      data: {
        ...prevForm.data,
        [name]: value,
      },
    }));
  };

  const handleClickShowPassword = () => {
    setForm((prevForm) => ({
      ...prevForm,
      showPassword: !prevForm.showPassword,
    }));
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handlePatientSignup = (e) => {
    e.preventDefault();
    router.push("/register_patient");
  };

  return (
    <PageLayout heading="Signup as Camp" page="Camp Login">
      <Box
        component="form"
        classes={{ root: classes.form }}
        onSubmit={handleSubmit}
      >
        <Grid spacing={3} container>
          <Grid xs={12} lg={12} item>
            <TextField
              classes={{ root: classes.inputRoot }}
              id="camp_id"
              name="camp_id"
              type="number"
              label="Camp Id"
              inputProps={{
                min: "1000",
                max: "10000",
                required: true,
              }}
              value={form.data.camp_id}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid xs={12} lg={12} item>
            <TextField
              classes={{ root: classes.inputRoot }}
              id="full_name"
              name="full_name"
              type="text"
              label="Primary address"
              value={form.data.full_name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid xs={12} lg={4} item>
            <TextField
              classes={{ root: classes.inputRoot }}
              id="full_name"
              name="full_name"
              type="text"
              label="city"
              value={form.data.full_name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid xs={12} lg={4} item>
            <TextField
              classes={{ root: classes.inputRoot }}
              id="full_name"
              name="full_name"
              type="text"
              label="state"
              value={form.data.full_name}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid xs={12} lg={4} item>
            <TextField
              classes={{ root: classes.inputRoot }}
              id="full_name"
              name="full_name"
              type="text"
              label="ward Number"
              value={form.data.full_name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid xs={12} item>
            <iframe
              title="map"
              src="https://www.google.com/maps/d/embed?mid=1q8j9-cGPI-rjUOdpd2TyArKlAWIh4_0Y"
              width="100%"
              height="480"
            ></iframe>
          </Grid>
          <Grid xs={12} lg={12} item>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="password"
              name="password"
              type={form.showPassword ? "text" : "password"}
              label="Password"
              value={form.data.password}
              classes={{ root: classes.inputRoot }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {form.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid xs={12} lg={12} item>
            <InputLabel htmlFor="standard-adornment-password">
              Retype Password
            </InputLabel>
            <Input
              id="confirm_password"
              name="confirm_password"
              type={form.showPassword ? "text" : "password"}
              label="Retype Password"
              value={form.data.confirm_password}
              classes={{ root: classes.inputRoot }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {form.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid xs={12} lg={12} item>
            <Box display="flex" justifyContent="space-between">
              {form.loading ? (
                <Box componet="span" display="flex" alignItems="center">
                  <CircularProgress />
                  &nbsp;&nbsp;&nbsp; Requesting...
                </Box>
              ) : (
                <Button type="submit" variant="contained" color="primary">
                  Sign up
                </Button>
              )}
              <Button
                variant="contained"
                onClick={handlePatientSignup}
                color="default"
                size="large"
              >
                Sign up as Patient Instead
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </PageLayout>
  );
};

export default withStyles(Styles)(DoctorSignup);
