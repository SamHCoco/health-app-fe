import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RegistrationForm from './components/registration';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <React.StrictMode>
    <RegistrationForm />
  </React.StrictMode>,
  document.getElementById('root')
);

