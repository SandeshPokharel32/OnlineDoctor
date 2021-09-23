import {
  Box,
  withStyles,
  Toolbar,
  Typography,
  Container,
} from "@material-ui/core";
import React from "react";

const Styles = () => {
  return {
    toolbar: {
      padding: "20px ",
      "box-shadow": "15px 9px 12px black",
      background: "#ffffff",
      color: "#000",
      position: "absolute",
      width: "100%",
      bottom: 0,
    },
  };
};

const Footer = ({ classes }) => {
  return (
    <Box classes={{ root: classes.toolbar }}>
      <Container>
        <Typography variant="body1" color="inherit">
          © Copywrite {new Date().getFullYear()} {process.env.REACT_APP_NAME}
        </Typography>
      </Container>
    </Box>
  );
};

export default withStyles(Styles)(Footer);
