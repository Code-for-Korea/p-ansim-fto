import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="btn"
      style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '14px',
        padding: '8px 16px',
        background: 'rgba(255, 255, 255, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <Globe size={16} />
      {language === 'ko' ? 'English' : '한국어'}
    </button>
  );
};

export default LanguageToggle;
