import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  withStyles,
} from "@material-ui/core";
import PageLayout from "layouts/PageLayout";
import React from "react";

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
  svgIcon: {
    borderRadius: "50%",
    padding: "2px",
    marginBottom: "40px",
    animation: "$pulse 2s infinite ease-in-out",
  },
  "@keyframes pulse": {
    "0%": {
      "-moz-box-shadow": "0 0 0 0 #0080004d",
      "box-shadow": "0 0 0 0 #0080004d",
    },
    "70%": {
      "-moz-box-shadow": "0 0 0 10px #0080004d",
      "box-shadow": "0 0 0 10px #0080004d",
    },
    "100%": {
      "-moz-box-shadow": "0 0 0 0 #0080004d",
      "box-shadow": "0 0 0 0 #0080004d",
    },
  },
});

const PatientList = ({ classes }) => {
  const [requesting, setRequesting] = React.useState(false);

  return (
    <PageLayout page="Citizen" heading="Citizen">
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
                Mr. Sanam Thapa
              </Typography>
              <Typography component="body1" variant="span">
                citizenship# : 111-111-2123
              </Typography>
            </Box>
            <Button size="large" variant="contained" color="primary">
              Logout
            </Button>
            <Divider />
            <div className={classes.toolbar} />
            <Divider />
            <List>
              {["View Profile", "Messages", "Find vaccine camp"].map(
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
          <Box marginLeft="20px">
            <Typography component="h2" variant="h2">
              Find Vaccine camps:
            </Typography>
          </Box>
          <Box marginTop="50px">
            {requesting ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="100"
                  height="100"
                  className={classes.svgIcon}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15zm-3.847-8.699a2 2 0 1 0 2.646 2.646 4 4 0 1 1-2.646-2.646z" />
                </svg>
                <Typography variant="h6" component="h4">
                  Finding camp near you...
                </Typography>
              </Box>
            ) : (
              <Button
                onClick={() => setRequesting(true)}
                size="large"
                variant="contained"
                color="primary"
              >
                Find a camp
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default withStyles(Styles)(PatientList);
