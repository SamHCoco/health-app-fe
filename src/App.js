import './App.css';
import { Route  } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import {useState, useEffect} from 'react';

import {isAuthenticated} from './service/authService';

import RegistrationForm from './components/Registration';
import RegistrationSuccess from './components/RegistrationSuccess';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import ProductList from './components/ProductList';


function App() {
  const [user, setUser] = useState();
  const [authenticated, setAuthenticated] = useState(false);


  useEffect(() => {
    try {
      const accessToken = localStorage.getItem("accessToken");        
      
      if (accessToken) {
        setAuthenticated(isAuthenticated(accessToken));
        if (authenticated) {
            console.log('User is AUTHENTICATED');
            const tokenClaims = jwtDecode(accessToken);
            console.log('Decoded user claims:');
            console.log(tokenClaims);
            setUser({tokenClaims});
        } else {
          console.log('User NOT AUTHENTICATED')
        }
      }
    } catch (e) {}
  }, []);

  return (
    <div>
        <NavBar user={user} authenticated={authenticated}></NavBar>
        <Route path="/login" exact component={LoginForm} />
        <Route path="/sign-up" exact component={RegistrationForm}/>
        <Route path="/registration-success" exact component={RegistrationSuccess} />
        <Route path="/store" exact component={ProductList} />
        <Footer></Footer>
    </div>
  );
}

export default App;
