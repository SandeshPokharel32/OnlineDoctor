import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import PageLayout from "layouts/PageLayout";
import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Visibility from "components/Icons/Visibility";
import VisibilityOff from "components/Icons/VisibilityOff";
import { useHistory } from "react-router";

const Styles = () => ({
  drawerPaper: {
    position: "static",
    textAlign: "center",
  },
  form: {
    maxWidth: "700px",
  },
  inputRoot: {
    width: "100%",
    marginTop: "0",
  },
});

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "patientId",
    headerName: "Patient Id",
    width: 200,
    editable: true,
  },
  {
    field: "patientName",
    headerName: "Patient Name",
    width: 300,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    editable: true,
  },
];

const rows = [
  { id: 1, patientId: 1, patientName: "Snow", status: "Active" },
  { id: 2, patientId: 2, patientName: "Lannister", status: "Suspended" },
  { id: 3, patientId: 3, patientName: "Lannister", status: "Suspended" },
  { id: 4, patientId: 4, patientName: "Stark", status: "Active" },
  { id: 5, patientId: 5, patientName: "Targaryen", status: "Suspended" },
  { id: 6, patientId: 6, patientName: "Melisandre", status: "Active" },
  { id: 7, patientId: 7, patientName: "Clifford", status: "Suspended" },
  { id: 8, patientId: 8, patientName: "Frances", status: "Active" },
  { id: 9, patientId: 9, patientName: "Roxie", status: "Active" },
];

const PatientList = ({ classes }) => {
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
    Object.keys(form.data).map((name) => {
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
    <PageLayout page="Admin" heading="Admin">
      <Grid container spacing={2}>
        <Grid xs={3} lg={3} item>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
          >
            <div className={classes.toolbar} />
            <Divider />
            <Box padding="20px 0" textAlign="center">
              <Typography component="h2" variant="h4">
                Admin
              </Typography>
            </Box>
            <Button variant="contained" color="primary">
              Logout
            </Button>
            <Divider />

            <div className={classes.toolbar} />
            <Divider />
            <List>
              {["Add Doctor", "Patient List", "Doctor List"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
          </Drawer>
        </Grid>
        <Grid xs={9} lg={9} item>
          <Box
            component="form"
            classes={{ root: classes.form }}
            onSubmit={handleSubmit}
          >
            <Grid spacing={3} container>
              <Grid xs={12} lg={12} item>
                <TextField
                  classes={{ root: classes.inputRoot }}
                  id="full_name"
                  name="full_name"
                  type="text"
                  label="Full Name"
                  value={form.data.full_name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid xs={12} lg={12} item>
                <TextField
                  classes={{ root: classes.inputRoot }}
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  value={form.data.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid xs={12} lg={12} item>
                <TextField
                  classes={{ root: classes.inputRoot }}
                  id="speciality"
                  name="speciality"
                  type="text"
                  label="speciality"
                  value={form.data.speciality}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid xs={12} lg={12} item>
                <TextField
                  classes={{ root: classes.inputRoot }}
                  id="temp_doctor_id"
                  name="temp_doctor_id"
                  type="number"
                  label="Temporary Doctor id"
                  value={form.data.temp_doctor_id}
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
                  >
                    Sign up as Patient Instead
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default withStyles(Styles)(PatientList);
