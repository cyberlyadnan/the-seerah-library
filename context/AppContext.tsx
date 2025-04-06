// context/AppContext.tsx
import { createContext, useContext, ReactNode, useState } from 'react';

type AppContextType = {
  theme: string;
  setTheme: (theme: string) => void;
  user: any;
  setUser: (user: any) => void;
  // Add other state variables as needed
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);

  const value = {
    theme,
    setTheme,
    user,
    setUser,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
}