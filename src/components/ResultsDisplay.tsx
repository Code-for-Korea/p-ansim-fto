import React, { useState } from 'react';
import { DisasterType, PersonalizedRecommendations, GameState } from '../types';
import { ChevronLeft, RotateCcw, Package, MapPin, AlertCircle, Download, Trophy, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ResultsDisplayProps {
  disaster: DisasterType;
  characteristics: any;
  recommendations: PersonalizedRecommendations;
  gameState?: GameState | null;
  onBack: () => void;
  onRestart: () => void;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  disaster,
  recommendations,
  gameState,
  onBack,
  onRestart
}) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'gobag' | 'evacuation'>('gobag');

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#dc3545';
      case 'medium': return '#ffc107';
      case 'low': return '#28a745';
      default: return '#6c757d';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high': return t.high;
      case 'medium': return t.medium;
      case 'low': return t.low;
      default: return '';
    }
  };

  const groupItemsByCategory = (items: any[]) => {
    const grouped = items.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});

    // Sort items within each category by priority
    Object.keys(grouped).forEach(category => {
      grouped[category].sort((a: any, b: any) => {
        const priorityOrder: { [key: string]: number } = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });
    });

    return grouped;
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'essential': return t.essential;
      case 'medical': return t.medical;
      case 'personal': return t.personal;
      case 'pet': return t.pet;
      case 'special': return t.special;
      case 'disaster': return t.disaster;
      case 'family': return t.familyCategory;
      default: return category;
    }
  };

  const groupedGoBagItems = groupItemsByCategory(recommendations.goBagItems);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const content = `
${t.appTitle} - ${t.personalizedInfo}

${t.selectDisaster}: ${disaster.name}
${t.generatedOn}: ${new Date().toLocaleString()}

=== ${t.goBagItems} ===
${Object.entries(groupedGoBagItems).map(([category, items]: [string, any]) => 
  `\n${getCategoryName(category)}:\n${items.map((item: any) => 
    `- ${item.name} (${t.priority}: ${getPriorityText(item.priority)})`
  ).join('\n')}`
).join('\n')}

=== ${t.evacuationInstructions} ===
${recommendations.evacuationInstructions.map((instruction, index) => 
  `${index + 1}. ${instruction.title}\n   ${instruction.description}`
).join('\n\n')}

=== ${t.additionalNotes} ===
${recommendations.additionalNotes.map((note, index) => 
  `${index + 1}. ${note}`
).join('\n')}
    `;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ansim-${disaster.name}-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>
          {disaster.icon} {disaster.name} {t.personalizedFor}
        </h3>
        <p style={{ color: '#6c757d' }}>
          {t.selectDisasterDesc}
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
          <button
            className={`btn ${activeTab === 'gobag' ? '' : 'btn-secondary'}`}
            onClick={() => setActiveTab('gobag')}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Package size={20} />
            {t.goBagItems}
          </button>
          <button
            className={`btn ${activeTab === 'evacuation' ? '' : 'btn-secondary'}`}
            onClick={() => setActiveTab('evacuation')}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <MapPin size={20} />
            {t.evacuationInstructions}
          </button>
        </div>

        {activeTab === 'gobag' && (
          <div>
            <h4 style={{ marginBottom: '1.5rem', color: '#007bff' }}>
              {t.goBagItems} (72시간용)
            </h4>
            {Object.entries(groupedGoBagItems).map(([category, items]: [string, any]) => (
              <div key={category} className="result-card" style={{ marginBottom: '1.5rem' }}>
                <h5 style={{ color: '#007bff', marginBottom: '1rem', fontSize: '1.1rem' }}>
                  {getCategoryName(category)}
                </h5>
                <ul className="result-list">
                  {items.map((item: any) => (
                    <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <strong>{item.name}</strong>
                        <div style={{ fontSize: '0.9rem', color: '#6c757d', marginTop: '4px' }}>
                          {item.description}
                        </div>
                      </div>
                      <span
                        style={{
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '0.8rem',
                          fontWeight: 'bold',
                          color: 'white',
                          backgroundColor: getPriorityColor(item.priority)
                        }}
                      >
                        {getPriorityText(item.priority)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'evacuation' && (
          <div>
            <h4 style={{ marginBottom: '1.5rem', color: '#007bff' }}>
              {t.evacuationInstructions}
            </h4>
            {recommendations.evacuationInstructions.map((instruction, index) => (
              <div key={instruction.id} className="result-card" style={{ marginBottom: '1rem' }}>
                <h5 style={{ color: '#007bff', marginBottom: '0.5rem' }}>
                  {index + 1}. {instruction.title}
                </h5>
                <p style={{ margin: 0, lineHeight: 1.6 }}>
                  {instruction.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {recommendations.additionalNotes.length > 0 && (
          <div className="result-card" style={{ marginTop: '2rem', borderLeftColor: '#ffc107' }}>
            <h5 style={{ color: '#ffc107', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertCircle size={20} />
              {t.additionalNotes}
            </h5>
            <ul className="result-list">
              {recommendations.additionalNotes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        )}

        {gameState && (
          <div className="result-card" style={{ marginTop: '2rem', background: 'linear-gradient(135deg, #28a745, #20c997)', color: 'white' }}>
            <h5 style={{ color: 'white', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Trophy size={20} />
              게임 결과
            </h5>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{gameState.score}</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>점수</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{gameState.currentItemCount}</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>아이템</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{(gameState.currentWeight / 1000).toFixed(1)}kg</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>무게</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{(gameState.currentVolume / 1000).toFixed(1)}L</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>부피</div>
              </div>
            </div>
            <div style={{ 
              padding: '1rem', 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              borderRadius: '8px'
            }}>
              <h6 style={{ margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Target size={16} />
                패킹된 아이템
              </h6>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.5rem' }}>
                {gameState.packedItems.map(packed => (
                  <div key={packed.item.id} style={{ 
                    padding: '0.5rem', 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}>
                    {packed.item.name} x{packed.quantity}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', marginTop: '2rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            className="btn btn-secondary"
            onClick={onBack}
          >
            <ChevronLeft size={20} />
            {t.back}
          </button>
          
          <button
            className="btn btn-secondary"
            onClick={onRestart}
          >
            <RotateCcw size={20} />
            {t.startOver}
          </button>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            className="btn"
            onClick={handleDownload}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Download size={20} />
            {t.download}
          </button>
          
          <button
            className="btn"
            onClick={handlePrint}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            {t.print}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
