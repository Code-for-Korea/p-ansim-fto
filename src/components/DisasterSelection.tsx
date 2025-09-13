import React from 'react';
import { DisasterType } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface DisasterSelectionProps {
  disasters: DisasterType[];
  onSelect: (disaster: DisasterType) => void;
}

const DisasterSelection: React.FC<DisasterSelectionProps> = ({ disasters, onSelect }) => {
  const { t } = useLanguage();
  
  return (
    <div>
      <p style={{ marginBottom: '2rem', textAlign: 'center', fontSize: '1.1rem', color: '#6c757d' }}>
        {t.selectDisaster}
      </p>
      
      <div className="checkbox-group">
        {disasters.map((disaster) => (
          <div
            key={disaster.id}
            className="checkbox-item"
            onClick={() => onSelect(disaster)}
            style={{ cursor: 'pointer' }}
          >
            <div style={{ fontSize: '2rem', marginRight: '1rem' }}>
              {disaster.icon}
            </div>
            <div>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>
                {disaster.name}
              </h3>
              <p style={{ margin: 0, color: '#6c757d', fontSize: '0.9rem' }}>
                {disaster.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisasterSelection;
