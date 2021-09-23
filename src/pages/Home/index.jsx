import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  withStyles,
} from "@material-ui/core";
import BaseLayout from "layouts/BaseLayout";
import { useHistory } from "react-router";

const Styles = ({ palette }) => {
  return {
    banner: {
      background: palette.primary.default,
      "min-height": "78vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    headingText: {
      color: "white",
    },
  };
};

const Home = ({ classes, children }) => {
  const router = useHistory();

  const handlePatient = (e) => {
    e.preventDefault();
    router.push("/login");
  };
  const handleDoctor = (e) => {
    e.preventDefault();
    router.push("/login_doctor");
  };
  return (
    <BaseLayout light>
      <Box className={classes.banner}>
        <Container>
          <Box textAlign="center" component="div">
            <Typography
              component="h1"
              variant="h1"
              classes={{ root: classes.headingText }}
            >
              Welcome to Online Doctors
            </Typography>
            <Typography
              component="p"
              variant="h4"
              classes={{ root: classes.headingText }}
            >
              Please choose what you want to join in as :
            </Typography>
            <Box marginTop="80px">
              <Box
                component="div"
                marginTop={3}
                gridTemplateColumns="1fr 1fr"
                display="grid"
                gridGap="10px"
                color="white"
              >
                <Button
                  variant="contained"
                  color="default"
                  onClick={handlePatient}
                >
                  Patient
                </Button>
                <Button
                  variant="contained"
                  color="default"
                  onClick={handleDoctor}
                >
                  Doctor
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </BaseLayout>
  );
};

export default withStyles(Styles)(Home);
