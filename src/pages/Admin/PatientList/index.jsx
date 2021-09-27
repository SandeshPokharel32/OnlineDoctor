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
    field: "citizenship",
    headerName: "citizenship#",
    width: 200,
    editable: true,
  },
  {
    field: "patientName",
    headerName: "Full Name",
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
  {
    id: 1,
    citizenship: "111 - 111 - 1121",
    patientName: "Snow",
    status: "vaccinated",
  },
  {
    id: 2,
    citizenship: "111 - 111 - 1121",
    patientName: "Lannister",
    status: "waiting",
  },
  {
    id: 3,
    citizenship: "111 - 111 - 1121",
    patientName: "Lannister",
    status: "waiting",
  },
  {
    id: 4,
    citizenship: "111 - 111 - 1121",
    patientName: "Stark",
    status: "vaccinated",
  },
  {
    id: 5,
    citizenship: "111 - 111 - 1121",
    patientName: "Targaryen",
    status: "waiting",
  },
  {
    id: 6,
    citizenship: "111 - 111 - 1121",
    patientName: "Melisandre",
    status: "vaccinated",
  },
  {
    id: 7,
    citizenship: "111 - 111 - 1121",
    patientName: "Clifford",
    status: "waiting",
  },
  {
    id: 8,
    citizenship: "111 - 111 - 1121",
    patientName: "Frances",
    status: "vaccinated",
  },
  {
    id: 9,
    citizenship: "111 - 111 - 1121",
    patientName: "Roxie",
    status: "vaccinated",
  },
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

export default withStyles(Styles)(PatientList);
