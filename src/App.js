import './App.css';
import { Route  } from 'react-router-dom';
import RegistrationForm from './components/Registration';
import RegistrationSuccess from './components/RegistrationSuccess';

function App() {
  return (
    <div>
        <Route path="/sign-up" component={RegistrationForm}/>
        <Route path="/registration-success" component={RegistrationSuccess} />
    </div>
  );
}

export default App;
