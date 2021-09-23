import React from "react";
import { Box, withStyles } from "@material-ui/core";
import Header from "components/Header";
import Footer from "components/Footer";

const Styles = ({ palette }) => {
  return {};
};

const BaseLayout = ({ classes, children, light = false }) => {
  return (
    <Box component="div">
      <Header light={light} />
      {children}
      <Footer />
    </Box>
  );
};

export default withStyles(Styles)(BaseLayout);
