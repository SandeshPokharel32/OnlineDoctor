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
    field: "patientId",
    headerName: "Patient Id",
    width: 200,
    editable: true,
  },
  {
    field: "patientName",
    headerName: "Patient Name",
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
  { id: 1, patientId: 1, patientName: "Snow", status: "Active" },
  { id: 2, patientId: 2, patientName: "Lannister", status: "Suspended" },
  { id: 3, patientId: 3, patientName: "Lannister", status: "Suspended" },
  { id: 4, patientId: 4, patientName: "Stark", status: "Active" },
  { id: 5, patientId: 5, patientName: "Targaryen", status: "Suspended" },
  { id: 6, patientId: 6, patientName: "Melisandre", status: "Active" },
  { id: 7, patientId: 7, patientName: "Clifford", status: "Suspended" },
  { id: 8, patientId: 8, patientName: "Frances", status: "Active" },
  { id: 9, patientId: 9, patientName: "Roxie", status: "Active" },
];

const PatientList = ({ classes }) => {
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
            <Button variant="contained" color="primary">
              Logout
            </Button>
            <Divider />

            <div className={classes.toolbar} />
            <Divider />
            <List>
              {["Add Doctor", "Patient List", "Doctor List"].map(
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

export default withStyles(Styles)(PatientList);
