import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from './Dark';
import { LightTheme } from './Light';
import { ThemesEnum, ThemeType } from './Theme.types';

const ThemeContext = React.createContext<{
  theme?: ThemesEnum;
  setTheme?: (theme: ThemesEnum) => void;
}>({});

const themeOptions: Record<ThemesEnum, ThemeType> = {
  [ThemesEnum.LIGHT]: LightTheme,
  [ThemesEnum.DARK]: DarkTheme,
};

const APP_THEME_KEY = 'APP_THEME';

const getLocalStorageTheme = () => {
  const storedTheme = localStorage.getItem(APP_THEME_KEY);
  return storedTheme === 'DARK' ? ThemesEnum.DARK : ThemesEnum.LIGHT;
};

export const ThemeProviderWrapper: React.FC = ({children}) => {
  const [theme, setTheme] = React.useState<ThemesEnum>(getLocalStorageTheme());

  window.addEventListener('storage', (event) => {
    if (event.storageArea !== localStorage) return;
    if (event.key === APP_THEME_KEY) {
      setTheme(getLocalStorageTheme);
    }
  });

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <ThemeProvider theme={themeOptions[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): {
  theme: ThemesEnum;
  setTheme: (theme: ThemesEnum) => void;
} => {
  const {theme, setTheme} = React.useContext(ThemeContext);

  if (!theme || !setTheme) {
    throw new Error('Used useTheme hook outside of ThemeProviderWrapper!');
  }

  const storeInLocalStorageToo = (currTheme: ThemesEnum) => {
    localStorage.setItem(APP_THEME_KEY, currTheme);
    setTheme(currTheme);
  };

  return {theme, setTheme: storeInLocalStorageToo};
};
