import React from "react";
import { Box, Container, withStyles } from "@material-ui/core";
import logo from "assets/images/logo.png";
import Navigation from "components/Navigation";
import { Link } from "react-router-dom";

const Styles = ({ palette }) => ({
  root: {
    minHeight: "80px",
    color: "white",
    background: palette.primary.default,
    '&[data-color="light"]': {
      background: "white",
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const Header = ({ classes, light = false }) => {
  return (
    <Box
      component="header"
      data-color={light ? "light" : "default"}
      classes={{ root: classes.root }}
    >
      <Container classes={{ root: classes.container }}>
        <Link to="/">
          <Box component="img" src={logo} />
        </Link>
        <Navigation light={light} />
      </Container>
    </Box>
  );
};

export default withStyles(Styles)(Header);
