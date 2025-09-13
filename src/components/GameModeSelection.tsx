import React, { useState } from 'react';
import { GameMode } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { Play, RotateCcw } from 'lucide-react';

interface GameModeSelectionProps {
  gameModes: GameMode[];
  onSelectMode: (mode: GameMode) => void;
  onBack: () => void;
}

const GameModeSelection: React.FC<GameModeSelectionProps> = ({
  gameModes,
  onSelectMode,
  onBack
}) => {
  const { t } = useLanguage();
  const [selectedMode, setSelectedMode] = useState<GameMode | null>(null);

  const formatWeight = (grams: number) => {
    if (grams >= 1000) return `${(grams / 1000).toFixed(0)}kg`;
    return `${grams}g`;
  };

  const formatVolume = (cm3: number) => {
    if (cm3 >= 1000) return `${(cm3 / 1000).toFixed(0)}L`;
    return `${cm3}cm³`;
  };

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ marginBottom: '1rem', color: '#007bff' }}>
          🎮 {t.bagPackingGame}
        </h2>
        <p style={{ color: '#6c757d', fontSize: '1.1rem' }}>
          {t.gameModeDescription}
        </p>
      </div>

      <div className="game-mode-grid">
        {gameModes.map(mode => (
          <div
            key={mode.id}
            className={`game-mode-card ${selectedMode?.id === mode.id ? 'selected' : ''}`}
            onClick={() => setSelectedMode(mode)}
          >
            <div className="game-mode-icon">{mode.icon}</div>
            <div className="game-mode-title">{mode.name}</div>
            <div className="game-mode-description">{mode.description}</div>
            <div className="game-mode-constraints">
              <div className="constraint-item">
                <span>{t.maxWeight}:</span>
                <span>{formatWeight(mode.constraints.maxWeight)}</span>
              </div>
              <div className="constraint-item">
                <span>{t.maxVolume}:</span>
                <span>{formatVolume(mode.constraints.maxVolume)}</span>
              </div>
              <div className="constraint-item">
                <span>{t.maxItems}:</span>
                <span>{mode.constraints.maxItems}{t.items}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
        <button
          className="btn btn-secondary"
          onClick={onBack}
        >
          <RotateCcw size={20} />
          {t.back}
        </button>
        
        <button
          className="btn"
          onClick={() => selectedMode && onSelectMode(selectedMode)}
          disabled={!selectedMode}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            opacity: selectedMode ? 1 : 0.5,
            cursor: selectedMode ? 'pointer' : 'not-allowed'
          }}
        >
          <Play size={20} />
          {t.startGame}
        </button>
      </div>
    </div>
  );
};

export default GameModeSelection;
