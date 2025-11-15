import React, { useState, useEffect } from 'react';
import { GoBagItem, GameMode, GameState, PackedItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { Package, Weight, Volume, CheckCircle, XCircle } from 'lucide-react';

interface BagPackingGameProps {
  recommendedItems: GoBagItem[];
  gameMode: GameMode;
  onComplete: (gameState: GameState) => void;
  onBack: () => void;
}

const BagPackingGame: React.FC<BagPackingGameProps> = ({
  recommendedItems,
  gameMode,
  onComplete,
  onBack
}) => {
  const { t } = useLanguage();
  const [gameState, setGameState] = useState<GameState>({
    availableItems: recommendedItems,
    packedItems: [],
    currentWeight: 0,
    currentVolume: 0,
    currentItemCount: 0,
    score: 0,
    isComplete: false,
    feedback: []
  });


  // Calculate current stats
  const calculateStats = (packedItems: PackedItem[]) => {
    const totalWeight = packedItems.reduce((sum, packed) => sum + ((packed.item.weight || 0) * packed.quantity), 0);
    const totalVolume = packedItems.reduce((sum, packed) => sum + ((packed.item.volume || 0) * packed.quantity), 0);
    const totalItems = packedItems.reduce((sum, packed) => sum + packed.quantity, 0);
    
    // Calculate score based on priority items packed
    const priorityScore = packedItems.reduce((score, packed) => {
      const priorityMultiplier = packed.item.priority === 'high' ? 3 : packed.item.priority === 'medium' ? 2 : 1;
      return score + (priorityMultiplier * packed.quantity);
    }, 0);

    const isComplete = totalWeight <= gameMode.constraints.maxWeight && 
                      totalVolume <= gameMode.constraints.maxVolume && 
                      totalItems <= gameMode.constraints.maxItems;

    return { totalWeight, totalVolume, totalItems, priorityScore, isComplete };
  };

  // Update stats when packedItems change
  useEffect(() => {
    const stats = calculateStats(gameState.packedItems);
    setGameState(prev => ({
      ...prev,
      currentWeight: stats.totalWeight,
      currentVolume: stats.totalVolume,
      currentItemCount: stats.totalItems,
      score: stats.priorityScore,
      isComplete: stats.isComplete
    }));
  }, [gameState.packedItems, gameMode.constraints]);

  const addItemToBag = (item: GoBagItem) => {
    setGameState(prev => {
      const existingPacked = prev.packedItems.find(p => p.item.id === item.id);
      
      if (existingPacked) {
        // Increase quantity
        const updatedPacked = prev.packedItems.map(p => 
          p.item.id === item.id 
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
        return { ...prev, packedItems: updatedPacked };
      } else {
        // Add new item
        return {
          ...prev,
          packedItems: [...prev.packedItems, { item, quantity: 1 }]
        };
      }
    });
  };

  const removeItemFromBag = (itemId: string) => {
    setGameState(prev => {
      const existingPacked = prev.packedItems.find(p => p.item.id === itemId);
      
      if (existingPacked && existingPacked.quantity > 1) {
        // Decrease quantity
        const updatedPacked = prev.packedItems.map(p => 
          p.item.id === itemId 
            ? { ...p, quantity: p.quantity - 1 }
            : p
        );
        return { ...prev, packedItems: updatedPacked };
      } else {
        // Remove item completely
        return {
          ...prev,
          packedItems: prev.packedItems.filter(p => p.item.id !== itemId)
        };
      }
    });
  };

  const getWeightPercentage = () => (gameState.currentWeight / gameMode.constraints.maxWeight) * 100;
  const getVolumePercentage = () => (gameState.currentVolume / gameMode.constraints.maxVolume) * 100;
  const getItemPercentage = () => (gameState.currentItemCount / gameMode.constraints.maxItems) * 100;

  const getProgressColor = (percentage: number) => {
    if (percentage >= 100) return '#dc3545'; // Red
    if (percentage >= 80) return '#ffc107'; // Yellow
    return '#28a745'; // Green
  };

  const isOverCapacity = () => {
    return gameState.currentWeight > gameMode.constraints.maxWeight || 
           gameState.currentVolume > gameMode.constraints.maxVolume || 
           gameState.currentItemCount > gameMode.constraints.maxItems;
  };

  const getOverCapacityMessage = () => {
    const messages = [];
    if (gameState.currentWeight > gameMode.constraints.maxWeight) {
      messages.push(`${t.weightExceeded}: ${formatWeight(gameState.currentWeight)} / ${formatWeight(gameMode.constraints.maxWeight)}`);
    }
    if (gameState.currentVolume > gameMode.constraints.maxVolume) {
      messages.push(`${t.volumeExceeded}: ${formatVolume(gameState.currentVolume)} / ${formatVolume(gameMode.constraints.maxVolume)}`);
    }
    if (gameState.currentItemCount > gameMode.constraints.maxItems) {
      messages.push(`${t.itemCountExceeded}: ${gameState.currentItemCount} / ${gameMode.constraints.maxItems}`);
    }
    return messages;
  };

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

  const formatWeight = (grams: number) => {
    if (grams >= 1000) return `${(grams / 1000).toFixed(1)}kg`;
    return `${grams}g`;
  };

  const formatVolume = (cm3: number) => {
    if (cm3 >= 1000) return `${(cm3 / 1000).toFixed(1)}L`;
    return `${cm3}cm³`;
  };

  const handleComplete = () => {
    onComplete(gameState);
  };

  return (
    <div className="bag-packing-game">
      <div className="game-header" style={{ marginBottom: '2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
          {gameMode.icon} {gameMode.name}
        </h2>
        <p style={{ textAlign: 'center', color: '#6c757d', marginBottom: '2rem' }}>
          {gameMode.description}
        </p>
        
        {/* Progress bars */}
        <div className="progress-container" style={{ marginBottom: '2rem' }}>
          <div className="progress-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span><Weight size={16} /> {t.weight}</span>
              <span>{formatWeight(gameState.currentWeight)} / {formatWeight(gameMode.constraints.maxWeight)}</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ 
                  width: `${Math.min(getWeightPercentage(), 100)}%`,
                  backgroundColor: getProgressColor(getWeightPercentage())
                }}
              />
            </div>
          </div>
          
          <div className="progress-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span><Volume size={16} /> {t.volume}</span>
              <span>{formatVolume(gameState.currentVolume)} / {formatVolume(gameMode.constraints.maxVolume)}</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ 
                  width: `${Math.min(getVolumePercentage(), 100)}%`,
                  backgroundColor: getProgressColor(getVolumePercentage())
                }}
              />
            </div>
          </div>
          
          <div className="progress-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span><Package size={16} /> {t.items}</span>
              <span>{gameState.currentItemCount} / {gameMode.constraints.maxItems}</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ 
                  width: `${Math.min(getItemPercentage(), 100)}%`,
                  backgroundColor: getProgressColor(getItemPercentage())
                }}
              />
            </div>
          </div>
        </div>

        {/* Score */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff' }}>
            {t.score}: {gameState.score}
          </div>
          <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>
            {t.scoreDescription}
          </div>
        </div>

        {/* Overcapacity Alert */}
        {isOverCapacity() && (
          <div style={{ 
            backgroundColor: '#f8d7da', 
            border: '2px solid #dc3545', 
            borderRadius: '8px', 
            padding: '1rem', 
            marginBottom: '2rem',
            color: '#721c24'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '1.2rem' }}>⚠️</span>
              <strong>{t.overcapacityAlert}</strong>
            </div>
            <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
              {getOverCapacityMessage().map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
            <div style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
              {t.removeItemsToFit}
            </div>
          </div>
        )}
      </div>

      <div className="game-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Available Items */}
        <div className="available-items">
          <h3 style={{ marginBottom: '1rem', color: '#007bff' }}>{t.availableItems}</h3>
          <div className="items-grid" style={{ display: 'grid', gap: '0.5rem', maxHeight: '500px', overflowY: 'auto' }}>
            {gameState.availableItems.map(item => {
              const packedItem = gameState.packedItems.find(p => p.item.id === item.id);
              const isPacked = !!packedItem;
              
              return (
                <div
                  key={item.id}
                  className={`item-card ${isPacked ? 'packed' : ''}`}
                  onClick={() => addItemToBag(item)}
                  style={{
                    padding: '1rem',
                    border: isPacked ? '2px solid #28a745' : '2px solid #e9ecef',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    backgroundColor: isPacked ? '#f8fff8' : 'white'
                  }}
                >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h4 style={{ margin: 0, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {item.icon && <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>}
                    {item.name}
                  </h4>
                  <span
                    style={{
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      color: 'white',
                      backgroundColor: getPriorityColor(item.priority)
                    }}
                  >
                    {getPriorityText(item.priority)}
                  </span>
                </div>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9rem', color: '#6c757d' }}>
                  {item.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#6c757d' }}>
                  <span>{t.weight}: {formatWeight(item.weight)}</span>
                  <span>{t.volume}: {formatVolume(item.volume)}</span>
                </div>
                {item.isEssential && (
                  <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#dc3545', fontWeight: 'bold' }}>
                    {t.essential}
                  </div>
                )}
                <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#007bff', fontWeight: 'bold' }}>
                  {isPacked ? `${t.inBag} ${packedItem.quantity}${t.itemsCount}` : t.clickToAdd}
                </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Packed Items */}
        <div className="packed-items">
          <h3 style={{ marginBottom: '1rem', color: '#007bff' }}>{t.packedItems}</h3>
          <div className="packed-grid" style={{ display: 'grid', gap: '0.5rem', maxHeight: '500px', overflowY: 'auto' }}>
            {gameState.packedItems.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
                {t.noItemsPacked}
              </div>
            ) : (
              gameState.packedItems.map(packed => (
                <div
                  key={packed.item.id}
                  className="packed-item"
                  style={{
                    padding: '1rem',
                    border: '2px solid #28a745',
                    borderRadius: '8px',
                    backgroundColor: '#f8fff8'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h4 style={{ margin: 0, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {packed.item.icon && <span style={{ fontSize: '1.2rem' }}>{packed.item.icon}</span>}
                      {packed.item.name}
                    </h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.9rem', color: '#6c757d' }}>x{packed.quantity}</span>
                      <button
                        onClick={() => removeItemFromBag(packed.item.id)}
                        style={{
                          background: '#dc3545',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '2px 6px',
                          cursor: 'pointer',
                          fontSize: '0.8rem'
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#6c757d' }}>
                    <span>{t.weight}: {formatWeight(packed.item.weight * packed.quantity)}</span>
                    <span>{t.volume}: {formatVolume(packed.item.volume * packed.quantity)}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
        <button
          className="btn btn-secondary"
          onClick={onBack}
        >
          {t.back}
        </button>
        
        <button
          className="btn"
          onClick={handleComplete}
          disabled={!gameState.isComplete}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            opacity: gameState.isComplete ? 1 : 0.5,
            cursor: gameState.isComplete ? 'pointer' : 'not-allowed'
          }}
        >
          {gameState.isComplete ? <CheckCircle size={20} /> : <XCircle size={20} />}
          {gameState.isComplete ? t.complete : t.overcapacityAlert}
        </button>
      </div>

      {/* Feedback */}
      {gameState.feedback.length > 0 && (
        <div className="feedback" style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h4>피드백</h4>
          <ul>
            {gameState.feedback.map((feedback, index) => (
              <li key={index}>{feedback}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BagPackingGame;
