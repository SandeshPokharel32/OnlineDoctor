import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, withStyles } from "@material-ui/core";

const Styles = ({ palette }) => {
  return {
    container: {
      display: "flex",
      alignItems: "center",
    },
    button: {
      color: "white",
    },
  };
};

const Navigation = ({ classes, light }) => {
  const router = useHistory();

  const handleLoginClick = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    router.push("/register");
  };

  return (
    <Box component="nav" className={classes.container}>
      <Box marginRight="20px">
        <Button
          variant="contained"
          onClick={handleLoginClick}
          color={light ? "primary" : "default"}
          href="#contained-buttons"
        >
          Login
        </Button>
      </Box>
      <Button
        variant="contained"
        onClick={handleRegisterClick}
        color={light ? "primary" : "#fff"}
        href="#contained-buttons"
      >
        Register
      </Button>
    </Box>
  );
};

export default withStyles(Styles)(Navigation);
