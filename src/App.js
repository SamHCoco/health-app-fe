import "./App.css";
import { Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useState, useEffect } from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";

import config from "./config/config.json";

import RegistrationForm from "./components/RegistrationForm";
import RegistrationSuccess from "./components/RegistrationSuccess";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import ProductList from "./components/ProductList";
import ProtectedRoute from './components/ProtectedRoute';
import axios from "axios";
import Loading from "./components/Loading";

function App() {
  return (
    <div>
        <ReactKeycloakProvider 
            authClient={keycloak} 
            initOptions= {{'onLoad': 'login-required'}}
            LoadingComponent={Loading}>
            <NavBar />
                <Route path="/login" exact>
                  <LoginForm />
                </Route>
                
                <Route path="/sign-up" exact component={RegistrationForm} />           
                <Route path="/registration-success" exact component={RegistrationSuccess} />
                
                <Route path="/store" exact > 
                  <ProtectedRoute> <ProductList /> </ProtectedRoute>
                </Route>
            
            <Footer></Footer>
        </ReactKeycloakProvider>
    </div>
  );
}

export default App;
