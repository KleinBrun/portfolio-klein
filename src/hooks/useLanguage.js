import { useState, useEffect } from 'react';

const LANGUAGE_KEY = 'portfolio-language';

function useLanguage() {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem(LANGUAGE_KEY);
      return saved === 'en' ? 'en' : 'es';
    } catch {
      return 'es';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(LANGUAGE_KEY, language);
    } catch {
    }
  }, [language]);

  const setLanguage = (lang) => {
    if (lang === 'en' || lang === 'es') {
      setLanguageState(lang);
    }
  };

  const toggle = () => {
    setLanguageState((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  return {
    value: language,
    setLanguage,
    toggle,
  };
}

export default useLanguage;
