import { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // const saved = localStorage.getItem('theme');
    // const prefersDark = window.matchMedia(
    //   '(prefers-color-scheme: dark)'
    // ).matches;
    // const initial = saved ? saved === 'dark' : prefersDark;
    // setIsDark(initial);
    // document.documentElement.classList.toggle('dark', initial);
    setIsDark(true);
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  const toggleTheme = () => {
    // const newMode = !isDark;
    // setIsDark(newMode);
    // document.documentElement.classList.toggle('dark', newMode);
    // localStorage.setItem('theme', newMode ? 'dark' : 'light');

    const newMode = !isDark;
    setIsDark(newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error('useThemeContext must be used within ThemeProvider');
  return ctx;
};
