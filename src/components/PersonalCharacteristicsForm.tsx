import React, { useState } from 'react';
import { PersonalCharacteristics } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PersonalCharacteristicsFormProps {
  characteristics: PersonalCharacteristics;
  onSubmit: (characteristics: PersonalCharacteristics) => void;
  onBack: () => void;
}

const PersonalCharacteristicsForm: React.FC<PersonalCharacteristicsFormProps> = ({
  characteristics,
  onSubmit,
  onBack
}) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<PersonalCharacteristics>(characteristics);

  const handleCheckboxChange = (field: keyof PersonalCharacteristics, value: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTextChange = (field: keyof PersonalCharacteristics, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field: 'medicalConditions' | 'medications', value: string) => {
    const items = value.split(',').map(item => item.trim()).filter(item => item);
    setFormData(prev => ({
      ...prev,
      [field]: items
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: '#007bff' }}>{t.physicalCharacteristics}</h3>
        <div className="checkbox-group">
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.wearsGlasses}
              onChange={(e) => handleCheckboxChange('wearsGlasses', e.target.checked)}
            />
            <span>{t.wearsGlasses}</span>
          </label>
          
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.isPregnant}
              onChange={(e) => handleCheckboxChange('isPregnant', e.target.checked)}
            />
            <span>{t.isPregnant}</span>
          </label>
          
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.hasMobilityIssues}
              onChange={(e) => handleCheckboxChange('hasMobilityIssues', e.target.checked)}
            />
            <span>{t.hasMobilityIssues}</span>
          </label>
          
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.isElderly}
              onChange={(e) => handleCheckboxChange('isElderly', e.target.checked)}
            />
            <span>{t.isElderly}</span>
          </label>
          
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.isChild}
              onChange={(e) => handleCheckboxChange('isChild', e.target.checked)}
            />
            <span>{t.isChild}</span>
          </label>
          
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.hasHearingImpairment}
              onChange={(e) => handleCheckboxChange('hasHearingImpairment', e.target.checked)}
            />
            <span>{t.hasHearingImpairment}</span>
          </label>
          
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.hasVisualImpairment}
              onChange={(e) => handleCheckboxChange('hasVisualImpairment', e.target.checked)}
            />
            <span>{t.hasVisualImpairment}</span>
          </label>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: '#007bff' }}>특수 의료 상황</h3>
        <div className="checkbox-group">
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.hasDiabetes}
              onChange={(e) => handleCheckboxChange('hasDiabetes', e.target.checked)}
            />
            <span>{t.hasDiabetes}</span>
          </label>
          
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.hasHypertension}
              onChange={(e) => handleCheckboxChange('hasHypertension', e.target.checked)}
            />
            <span>{t.hasHypertension}</span>
          </label>
          
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.hasLowBloodPressure}
              onChange={(e) => handleCheckboxChange('hasLowBloodPressure', e.target.checked)}
            />
            <span>{t.hasLowBloodPressure}</span>
          </label>
          
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.hasDevelopmentalDisabilities}
              onChange={(e) => handleCheckboxChange('hasDevelopmentalDisabilities', e.target.checked)}
            />
            <span>{t.hasDevelopmentalDisabilities}</span>
          </label>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: '#007bff' }}>{t.specialCircumstances}</h3>
        <div className="checkbox-group">
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.livesNearMountain}
              onChange={(e) => handleCheckboxChange('livesNearMountain', e.target.checked)}
            />
            <span>{t.livesNearMountain}</span>
          </label>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: '#007bff' }}>{t.familyPets}</h3>
        <div className="checkbox-group">
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.hasChildren}
              onChange={(e) => handleCheckboxChange('hasChildren', e.target.checked)}
            />
            <span>{t.hasChildren}</span>
          </label>
          
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.hasInfant}
              onChange={(e) => handleCheckboxChange('hasInfant', e.target.checked)}
            />
            <span>{t.hasInfant}</span>
          </label>
          
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.hasPets}
              onChange={(e) => handleCheckboxChange('hasPets', e.target.checked)}
            />
            <span>{t.hasPets}</span>
          </label>
        </div>
        
        {formData.hasPets && (
          <div className="form-group" style={{ marginTop: '1rem' }}>
            <label className="form-label">{t.petType}</label>
            <select
              className="form-control"
              value={formData.petType || ''}
              onChange={(e) => handleTextChange('petType', e.target.value as any)}
            >
              <option value="">{t.selectPetType}</option>
              <option value="dog">{t.dog}</option>
              <option value="cat">{t.cat}</option>
              <option value="bird">{t.bird}</option>
              <option value="other">{t.other}</option>
            </select>
          </div>
        )}
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: '#007bff' }}>{t.medicalInfo}</h3>
        <div className="checkbox-group">
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.hasMedicalConditions}
              onChange={(e) => handleCheckboxChange('hasMedicalConditions', e.target.checked)}
            />
            <span>{t.hasMedicalConditions}</span>
          </label>
          
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.takesMedications}
              onChange={(e) => handleCheckboxChange('takesMedications', e.target.checked)}
            />
            <span>{t.takesMedications}</span>
          </label>
        </div>
        
        {formData.hasMedicalConditions && (
          <div className="form-group">
            <label className="form-label">{t.medicalConditions}</label>
            <input
              type="text"
              className="form-control"
              value={formData.medicalConditions.join(', ')}
              onChange={(e) => handleArrayChange('medicalConditions', e.target.value)}
              placeholder={t.medicalConditionsPlaceholder}
            />
          </div>
        )}
        
        {formData.takesMedications && (
          <div className="form-group">
            <label className="form-label">{t.medications}</label>
            <input
              type="text"
              className="form-control"
              value={formData.medications.join(', ')}
              onChange={(e) => handleArrayChange('medications', e.target.value)}
              placeholder={t.medicationsPlaceholder}
            />
          </div>
        )}
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: '#007bff' }}>{t.otherInfo}</h3>
        <div className="checkbox-group">
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.hasCar}
              onChange={(e) => handleCheckboxChange('hasCar', e.target.checked)}
            />
            <span>{t.hasCar}</span>
          </label>
          
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.hasEmergencyContact}
              onChange={(e) => handleCheckboxChange('hasEmergencyContact', e.target.checked)}
            />
            <span>{t.hasEmergencyContact}</span>
          </label>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', marginTop: '2rem' }}>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onBack}
        >
          <ChevronLeft size={20} />
          {t.back}
        </button>
        
        <button
          type="submit"
          className="btn"
        >
          {t.generatePersonalizedInfo}
          <ChevronRight size={20} />
        </button>
      </div>
    </form>
  );
};

export default PersonalCharacteristicsForm;
