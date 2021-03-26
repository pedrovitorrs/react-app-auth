import React, { createContext } from 'react';

import useProject from './hooks/useProject';

const ContextProject = createContext();

function ProjectProvider({ children }) {
  const {
    valueButton, setValueButton,
  } = useProject();

  return (
    <ContextProject.Provider value={{ valueButton, setValueButton }}>
      {children}
    </ContextProject.Provider>
  );
}

export { ContextProject, ProjectProvider };