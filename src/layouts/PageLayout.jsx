import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import BaseLayout from "./BaseLayout";

const Styles = () => ({
  container: {
    paddingTop: "50px",
    paddingBottom: "25px",
  },
  contentContainer: {
    paddingBottom: "50px",
  },
});

const PageLayout = ({ classes, heading, children, page }) => {
  return (
    <BaseLayout>
      <Container className={classes.container}>
        <Grid container>
          <Grid item xs={6}>
            <Typography component="h1" variant="h2" color="light">
              {heading}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" justifyContent="flex-end">
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="/">
                  Home
                </Link>
                <Typography color="textPrimary">{page}</Typography>
              </Breadcrumbs>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.contentContainer}>{children}</Container>
    </BaseLayout>
  );
};

export default withStyles(Styles)(PageLayout);
