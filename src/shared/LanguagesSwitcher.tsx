import { useState } from 'react';

type LanguageSwitcherProps = {
  changeLanguage: (lang: string) => void;
};

const LanguageSwitcher = ({ changeLanguage }: LanguageSwitcherProps) => {
  const [language, setLanguage] = useState<string>('en');

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'de' : 'en';
    setLanguage(newLang);
    changeLanguage(newLang);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        className="px-2 py-1 text-sm bg-gray-200 rounded-md hover:bg-gray-300"
        onClick={toggleLanguage}
      >
        {language === 'en' ? 'EN' : 'DE'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
