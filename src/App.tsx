import { useState } from 'react';
import { PersonalCharacteristics, DisasterType, GameMode, GameState } from './types';
import { getDisasterTypes, getGameModes } from './data';
import DisasterSelection from './components/DisasterSelection';
import PersonalCharacteristicsForm from './components/PersonalCharacteristicsForm';
import ResultsDisplay from './components/ResultsDisplay';
import GameModeSelection from './components/GameModeSelection';
import BagPackingGame from './components/BagPackingGame';
import { generatePersonalizedRecommendations } from './recommendationEngine';
import { useLanguage } from './contexts/LanguageContext';
import LanguageToggle from './components/LanguageToggle';

type AppStep = 'disaster' | 'characteristics' | 'gameMode' | 'game' | 'results';

function App() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState<AppStep>('disaster');
  const [selectedDisaster, setSelectedDisaster] = useState<DisasterType | null>(null);
  const [selectedGameMode, setSelectedGameMode] = useState<GameMode | null>(null);
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [characteristics, setCharacteristics] = useState<PersonalCharacteristics>({
    wearsGlasses: false,
    isPregnant: false,
    hasMobilityIssues: false,
    isElderly: false,
    hasHearingImpairment: false,
    hasVisualImpairment: false,
    hasChildren: false,
    hasPets: false,
    petType: undefined,
    location: '',
    hasMedicalConditions: false,
    medicalConditions: [],
    takesMedications: false,
    medications: [],
    hasDiabetes: false,
    hasHypertension: false,
    hasLowBloodPressure: false,
    hasDevelopmentalDisabilities: false,
    livesNearMountain: false,
    hasInfant: false,
    hasCar: false,
    hasEmergencyContact: false,
  });

  const handleDisasterSelect = (disaster: DisasterType) => {
    setSelectedDisaster(disaster);
    setCurrentStep('characteristics');
  };

  const handleCharacteristicsSubmit = (newCharacteristics: PersonalCharacteristics) => {
    setCharacteristics(newCharacteristics);
    setCurrentStep('gameMode');
  };

  const handleGameModeSelect = (gameMode: GameMode) => {
    setSelectedGameMode(gameMode);
    setCurrentStep('game');
  };

  const handleGameComplete = (completedGameState: GameState) => {
    setGameState(completedGameState);
    setCurrentStep('results');
  };

  const handleBack = () => {
    if (currentStep === 'characteristics') {
      setCurrentStep('disaster');
    } else if (currentStep === 'gameMode') {
      setCurrentStep('characteristics');
    } else if (currentStep === 'game') {
      setCurrentStep('gameMode');
    } else if (currentStep === 'results') {
      setCurrentStep('game');
    }
  };

  const handleRestart = () => {
    setCurrentStep('disaster');
    setSelectedDisaster(null);
    setSelectedGameMode(null);
    setGameState(null);
    setCharacteristics({
      wearsGlasses: false,
      isPregnant: false,
      hasMobilityIssues: false,
      isElderly: false,
      hasHearingImpairment: false,
      hasVisualImpairment: false,
      hasChildren: false,
      hasPets: false,
      petType: undefined,
      location: '',
      hasMedicalConditions: false,
      medicalConditions: [],
      takesMedications: false,
      medications: [],
      hasDiabetes: false,
      hasHypertension: false,
      hasLowBloodPressure: false,
      hasDevelopmentalDisabilities: false,
      livesNearMountain: false,
      hasInfant: false,
      hasCar: false,
      hasEmergencyContact: false,
    });
  };


  const getStepTitle = (step: AppStep): string => {
    switch (step) {
      case 'disaster': return t.disasterSelection;
      case 'characteristics': return t.personalCharacteristics;
      case 'gameMode': return t.gameModeSelection;
      case 'game': return t.bagPackingGame;
      case 'results': return t.personalizedInfo;
      default: return '';
    }
  };

  return (
    <div className="App">
      <header className="header" style={{ position: 'relative' }}>
        <LanguageToggle />
        <div className="container">
          <h1>{t.appTitle}</h1>
          <p>{t.appSubtitle}</p>
        </div>
      </header>

      <main className="container" style={{ flex: 1, padding: '2rem 0' }}>
        <div className="step-indicator">
          <div className={`step ${currentStep === 'disaster' ? 'active' : currentStep === 'characteristics' || currentStep === 'results' ? 'completed' : ''}`}>
            <div className="step-number">1</div>
            {t.step1}
          </div>
          <div className={`step ${currentStep === 'characteristics' ? 'active' : currentStep === 'results' ? 'completed' : ''}`}>
            <div className="step-number">2</div>
            {t.step2}
          </div>
          <div className={`step ${currentStep === 'results' ? 'active' : ''}`}>
            <div className="step-number">3</div>
            {t.step3}
          </div>
        </div>

        <div className="card">
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>
            {getStepTitle(currentStep)}
          </h2>

          {currentStep === 'disaster' && (
            <DisasterSelection
              disasters={getDisasterTypes(t)}
              onSelect={handleDisasterSelect}
            />
          )}

          {currentStep === 'characteristics' && selectedDisaster && (
            <PersonalCharacteristicsForm
              characteristics={characteristics}
              onSubmit={handleCharacteristicsSubmit}
              onBack={handleBack}
            />
          )}

          {currentStep === 'gameMode' && (
            <GameModeSelection
              gameModes={getGameModes(t)}
              onSelectMode={handleGameModeSelect}
              onBack={handleBack}
            />
          )}

          {currentStep === 'game' && selectedDisaster && selectedGameMode && (
            <BagPackingGame
              recommendedItems={generatePersonalizedRecommendations(characteristics, selectedDisaster.id, t).goBagItems}
              gameMode={selectedGameMode}
              onComplete={handleGameComplete}
              onBack={handleBack}
            />
          )}

          {currentStep === 'results' && selectedDisaster && (
            <ResultsDisplay
              disaster={selectedDisaster}
              characteristics={characteristics}
              recommendations={generatePersonalizedRecommendations(characteristics, selectedDisaster.id, t)}
              gameState={gameState}
              onBack={handleBack}
              onRestart={handleRestart}
            />
          )}
        </div>
      </main>

      <footer style={{ background: '#f8f9fa', padding: '2rem 0', textAlign: 'center', color: '#6c757d' }}>
        <div className="container">
          <p>{t.copyright}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
