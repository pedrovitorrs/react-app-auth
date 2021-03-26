import { useState } from 'react';

import api from '../../services/api'

import history from '../../history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    api.defaults.headers.Authorization = undefined;
    history.push('/signin');
  }
  
  return { authenticated, setAuthenticated, handleLogout };
}