import {
  Avatar,
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
  ListItemAvatar,
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
    <PageLayout page="Doctor" heading="Doctor">
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
                Dr. John Doe
              </Typography>
              <Typography component="p" variant="body2">
                Doctor Id : 1022
              </Typography>
            </Box>
            <Button variant="contained" color="primary">
              Logout
            </Button>
            <Divider />

            <div className={classes.toolbar} />
            <Divider />
            <List>
              {["View Profile", "Messages"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Grid>
        <Grid xs={9} lg={9} item>
          <Box marginLeft="20px">
            <Typography component="h2" variant="h2">
              Messages:
            </Typography>
          </Box>
          <List className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Appointment cancelled for 2021-10-02"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="You have an Appointment on 2021-10-03"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="You have an Appointment on 2021-10-03"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="You have an Appointment on 2021-10-03"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="You have an Appointment on 2021-10-03"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="You have an Appointment on 2021-10-03"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="You have an Appointment on 2021-10-03"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="You have an Appointment on 2021-10-03"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default withStyles(Styles)(PatientList);
