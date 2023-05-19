import React, { useState, createContext } from "react";

export const CharacterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [character, setCharacter] = useState({});

  const values = {
    character,
    setCharacter
  }
  

  return (
    <CharacterContext.Provider value={values}>{children}</CharacterContext.Provider>
  );
};
