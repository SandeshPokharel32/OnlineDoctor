import React, { useState } from "react";
import PageLayout from "layouts/PageLayout";
import { Box, withStyles, Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router";

const Styles = () => {
  return {
    form: {
      textAlign: "center",
    },
    inputRoot: {
      width: "100%",
    },
  };
};

const DoctorLogin = ({ classes }) => {
  const [form, setForm] = useState({
    data: {
      doctor_id: "",
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

  const handlePatientSignUp = (e) => {
    e.preventDefault();
    router.push("/register_patient");
  };

  const handleDoctorSignUp = (e) => {
    e.preventDefault();
    router.push("/register_doctor");
  };

  return (
    <PageLayout heading="Sign up" page="Sign up">
      <Box
        component="form"
        classes={{ root: classes.form }}
        onSubmit={handleSubmit}
      >
        <Typography component="h2" variant="h4">
          Register as :
        </Typography>
        <Box display="flex" justifyContent="center" marginTop="20px">
          <Button
            variant="contained"
            color="primary"
            onClick={handlePatientSignUp}
            size="large"
          >
            Citizen
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleDoctorSignUp}
          >
            Vaccine camp
          </Button>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default withStyles(Styles)(DoctorLogin);
