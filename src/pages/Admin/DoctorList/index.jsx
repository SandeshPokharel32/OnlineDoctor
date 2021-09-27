import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  withStyles,
} from "@material-ui/core";
import PageLayout from "layouts/PageLayout";
import React from "react";
import { DataGrid } from "@material-ui/data-grid";

const Styles = () => ({
  drawerPaper: {
    position: "static",
    textAlign: "center",
  },
});

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "campId",
    headerName: "Camp#",
    width: 200,
    editable: true,
  },
  {
    field: "location",
    headerName: "Location",
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
  { id: 1, campId: 1123, location: "Jadibuti", status: "processing" },
  { id: 2, campId: 2234, location: "koteshwor", status: "waiting" },
  { id: 3, campId: 3545, location: "civil hospital", status: "waiting" },
  { id: 4, campId: 1254, location: "maiti devi", status: "processing" },
  { id: 5, campId: 56235, location: "Baneshwor", status: "waiting" },
  { id: 6, campId: 3256, location: "old baneshwor", status: "completed" },
  { id: 7, campId: 2357, location: "jamshikhel", status: "processing" },
  { id: 8, campId: 6368, location: "bhaktapur", status: "completed" },
  { id: 9, campId: 9564, location: "lokanthali", status: "processing" },
];

const DoctorList = ({ classes }) => {
  return (
    <PageLayout page="Admin" heading="Admin">
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
                Admin
              </Typography>
            </Box>
            <Button size="large" variant="contained" color="primary">
              Logout
            </Button>
            <Divider />

            <div className={classes.toolbar} />
            <Divider />
            <List>
              {["Add Camps", "Citizen List", "Camps List"].map(
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
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default withStyles(Styles)(DoctorList);
