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
    },
  };
};

const Login = ({ classes }) => {
  const [form, setForm] = useState({
    data: {
      citizenshipNumber: "",
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

  const handleDoctorLogin = (e) => {
    e.preventDefault();
    router.push("/login_doctor");
  };

  return (
    <PageLayout heading="Citizen Login" page="Login">
      <Box
        component="form"
        classes={{ root: classes.form }}
        onSubmit={handleSubmit}
      >
        <Grid spacing={3} container>
          <Grid xs={12} lg={12} item>
            <TextField
              classes={{ root: classes.inputRoot }}
              id="citizenshipNumber"
              name="citizenshipNumber"
              type="text"
              inputProps={{
                pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
                title: "Should be valid citizenship 000-000-0000",
                minLength: "12",
                maxLength: "12",
                required: true,
              }}
              label="Citizenship Number"
              value={form.data.citizenshipNumber}
              onChange={handleChange}
              required
            />
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
              inputProps={{
                minLength: 6,
                required: true,
              }}
              value={form.data.password}
              classes={{ root: classes.inputRoot }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
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
                  Login
                </Button>
              )}
              <Button
                variant="contained"
                onClick={handleDoctorLogin}
                color="default"
                size="large"
              >
                Login as Vaccine camp
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </PageLayout>
  );
};

export default withStyles(Styles)(Login);
