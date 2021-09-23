export const routes = [
  {
    path: "/",
    exact: true,
    component: "Home",
  },
  {
    path: "/login",
    exact: true,
    component: "Login",
  },
  {
    path: "/login_doctor",
    exact: true,
    component: "DoctorLogin",
  },
  {
    path: "/register",
    exact: true,
    component: "Register",
  },
  {
    path: "/register_doctor",
    exact: true,
    component: "DoctorSignup",
  },
  {
    path: "/register_patient",
    exact: true,
    component: "PatientSignup",
  },
  {
    path: "/admin",
    exact: true,
    component: "Admin",
  },
  {
    path: "/patient",
    exact: true,
    component: "Patient",
  },
  {
    path: "/patient/make_appointment",
    exact: true,
    component: "Patient/MakeAppointment",
  },
  {
    path: "/admin",
    exact: true,
    component: "Admin",
  },
  {
    path: "/doctor",
    exact: true,
    component: "Doctor",
  },
  {
    path: "/admin/doctor_list",
    exact: true,
    component: "Admin/DoctorList",
  },

  {
    path: "/admin/patient_list",
    exact: true,
    component: "Admin/PatientList",
  },
  {
    path: "*",
    exact: true,
    component: "NotFoundPage",
  },
];
