import React from 'react';
import { ThemesEnum } from './Theme.types';
import { useTheme } from './ThemeProviderWrapper';
import './ThemeSwitcher.css';

export const ThemeSwitcher: React.FC = () => {
  const {theme, setTheme} = useTheme();

  return (
    <label
      className="theme-selector-label"
      title={`${theme === ThemesEnum.LIGHT ? 'Activate dark theme' : 'Activate light theme'}`}
      aria-label={`${theme === ThemesEnum.LIGHT ? 'Activate dark theme' : 'Activate light theme'}`}>
      <input
        type="checkbox"
        checked={theme !== ThemesEnum.LIGHT}
        onChange={() => setTheme(theme === ThemesEnum.LIGHT ? ThemesEnum.DARK : ThemesEnum.LIGHT)}
      />
      <div />
    </label>
  );
};
