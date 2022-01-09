import "./App.css";
import { Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useState, useEffect } from "react";

import config from "./config/config.json";

import RegistrationForm from "./components/RegistrationForm";
import RegistrationSuccess from "./components/RegistrationSuccess";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import ProductList from "./components/ProductList";
import axios from "axios";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      async function checkAuth(token) {
        try {
          const { data: response } = await axios.post(config.authTokenInfoUrl, {
            access_token: token,
          });
          const { active } = response;
          console.log("isAuthenticated: " + active);
          return active;
        } catch (exception) {
          console.log("Failed to check user auth token: ");
          console.log(exception);
          return false;
        }
      }

      if (accessToken) {
        const active = checkAuth(accessToken);
        if (active) {
          console.log("User is AUTHENTICATED");
          const tokenClaims = jwtDecode(accessToken);
          console.log("Decoded user claims:");
          console.log(tokenClaims);
          setUser({ tokenClaims });
        } else {
          console.log("User NOT AUTHENTICATED");
        }
      } else {
        console.log("User NOT AUTHENTICATED");
      }
    } catch (e) {}
  }, [setUser]);

  return (
    <div>
      <NavBar user={user}></NavBar>
      <Route path="/login" exact>
        <LoginForm user={user} />
      </Route>
      <Route path="/sign-up" exact component={RegistrationForm} />
      <Route
        path="/registration-success"
        exact
        component={RegistrationSuccess}
      />
      <Route path="/store" exact component={ProductList} />
      <Footer></Footer>
    </div>
  );
}

export default App;
