import { useEffect } from 'react';

const useDarkMode = () => {
  useEffect(() => {
    if (!localStorage.theme) {
      document.documentElement.classList.add('light');
      localStorage.theme = 'light';
    }

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const setTheme = (theme) => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.theme = theme;
  };

  return { setTheme };
};

export default useDarkMode;
