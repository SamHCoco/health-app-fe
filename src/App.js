import './App.css';
import { Route  } from 'react-router-dom';
import RegistrationForm from './components/Registration';

function App() {
  return (
    <div>
        <Route path="/sign-up" component={RegistrationForm}/>
    </div>
  );
}

export default App;
