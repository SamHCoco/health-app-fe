import './App.css';
import { Route  } from 'react-router-dom';
import RegistrationForm from './components/Registration';
import RegistrationSuccess from './components/RegistrationSuccess';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div>
        <NavBar></NavBar>
        <Route path="/login" component={LoginForm} />
        <Route path="/sign-up" component={RegistrationForm}/>
        <Route path="/registration-success" component={RegistrationSuccess} />
        <Footer></Footer>
    </div>
  );
}

export default App;
