import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from 'react-router-dom';
import AllRoutes from './routes/routes';

function App() {
  return (
      <Router>
            <AllRoutes/>
      </Router>
  );
}

export default App;
