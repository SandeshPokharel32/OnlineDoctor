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
});

const PatientList = ({ classes }) => {
  return (
    <PageLayout page="citizen" heading="citizen">
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
              Messages:
            </Typography>
          </Box>
          <List className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Vaccine appointed for 2021-10-02"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      At Jadibuti, koteshwor (1st dose)
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default withStyles(Styles)(PatientList);
