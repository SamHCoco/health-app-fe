import './App.css';
import { Route  } from 'react-router-dom';
import RegistrationForm from './components/Registration';
import RegistrationSuccess from './components/RegistrationSuccess';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import ProductList from './components/ProductList';

function App() {
  return (
    <div>
        <NavBar></NavBar>
        <Route path="/login" exact component={LoginForm} />
        <Route path="/sign-up" exact component={RegistrationForm}/>
        <Route path="/registration-success" exact component={RegistrationSuccess} />
        <Route path="/store" exact component={ProductList} />
        <Footer></Footer>
    </div>
  );
}

export default App;
