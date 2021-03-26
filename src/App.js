import React from 'react';
import Routes from './routes';
import { Router } from 'react-router-dom';

import {Globalstyle} from "./styles/global";

import history from './history';

import { AuthProvider } from './Context/AuthContext';
import {ProjectProvider} from './Context/ProjectContext';

function App() {
  return (
    <AuthProvider>
      <ProjectProvider>
        <Router history={history}>
          <Globalstyle/>
          <Routes />
        </Router>
      </ProjectProvider>
    </AuthProvider>
  );
}

export default App;
