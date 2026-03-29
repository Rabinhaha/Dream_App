import React, { createContext, useState, ReactNode } from 'react';

type Dream = {
  title: string;
  description: string;
  date:string;
  day:string
};

type DreamContextType = {
  dreams: Dream[];
  addDream: (dream: Dream) => void;
};

export const DreamContext = createContext<DreamContextType>({
  dreams: [],
  addDream: () => {},
});

export const DreamProvider = ({ children }: { children: ReactNode }) => {
  const [dreams, setDreams] = useState<Dream[]>([]);

  const addDream = (dream: Dream) => {
    setDreams(prev => [...prev, dream]);
  };

  return (
    <DreamContext.Provider value={{ dreams, addDream }}>
      {children}
    </DreamContext.Provider>
  );
};
