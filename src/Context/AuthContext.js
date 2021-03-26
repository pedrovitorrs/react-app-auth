import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const {
    authenticated, setAuthenticated, handleLogout,
  } = useAuth();

  return (
    <Context.Provider value={{ authenticated, setAuthenticated, handleLogout }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };