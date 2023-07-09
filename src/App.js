import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Doctor from "./pages/doctor/Doctor";
import Read from "./pages/read/Read";
import Update from "./pages/update/Update";
import { Button, Result } from "antd";
import Patient from "./pages/patient/Patient";
import CreatePatient from "./pages/createPatient/CreatePatient";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/doctor",
    element: <Doctor />,
  },
  {
    path: "/read",
    element: <Read />,
  },
  {
    path: "/update",
    element: <Update />,
  },
  {
    path: "/buy-a-card",
    element: (
      <Result
        status="404"
        title="Coming Soon..."
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to={"/"}>
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    ),
  },
  {
    path: "/patient",
    element: <Patient />,
  },
  {
    path: "/complete-data",
    element: <CreatePatient />,
  },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
