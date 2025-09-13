export interface PersonalCharacteristics {
  // Physical characteristics
  wearsGlasses: boolean;
  isPregnant: boolean;
  hasMobilityIssues: boolean;
  isElderly: boolean;
  hasHearingImpairment: boolean;
  hasVisualImpairment: boolean;
  
  // Family/pets
  hasChildren: boolean;
  hasPets: boolean;
  petType?: 'dog' | 'cat' | 'bird' | 'other';
  
  // Location
  location: string;
  
  // Medical needs
  hasMedicalConditions: boolean;
  medicalConditions: string[];
  takesMedications: boolean;
  medications: string[];
  
  // Specific medical conditions
  hasDiabetes: boolean;
  hasHypertension: boolean;
  hasLowBloodPressure: boolean;
  hasDevelopmentalDisabilities: boolean;
  
  // Special circumstances
  livesNearMountain: boolean;
  hasInfant: boolean;
  isPregnant: boolean;
  
  // Other
  hasCar: boolean;
  hasEmergencyContact: boolean;
}

export interface DisasterType {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface GoBagItem {
  id: string;
  name: string;
  category: 'essential' | 'medical' | 'personal' | 'pet' | 'special' | 'disaster' | 'family';
  description: string;
  priority: 'high' | 'medium' | 'low';
  requiredFor: string[]; // conditions that require this item
  weight: number; // in grams
  volume: number; // in cubic centimeters
  isEssential?: boolean; // if true, must be included
}

export interface EvacuationInstruction {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  requiredFor: string[]; // conditions that require this instruction
}

export interface PersonalizedRecommendations {
  goBagItems: GoBagItem[];
  evacuationInstructions: EvacuationInstruction[];
  additionalNotes: string[];
}

export interface BagConstraints {
  maxWeight: number; // in grams
  maxVolume: number; // in cubic centimeters
  maxItems: number;
}

export interface PackedItem {
  item: GoBagItem;
  quantity: number;
}

export interface GameState {
  availableItems: GoBagItem[];
  packedItems: PackedItem[];
  currentWeight: number;
  currentVolume: number;
  currentItemCount: number;
  score: number;
  isComplete: boolean;
  feedback: string[];
}

export interface GameMode {
  id: string;
  name: string;
  description: string;
  constraints: BagConstraints;
  icon: string;
}
