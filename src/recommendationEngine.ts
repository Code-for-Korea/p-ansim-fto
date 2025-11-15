import { PersonalCharacteristics, PersonalizedRecommendations } from './types';
import { getGoBagItems, getEvacuationInstructions } from './data';

export function generatePersonalizedRecommendations(
  characteristics: PersonalCharacteristics,
  disasterType: string,
  t: any
): PersonalizedRecommendations {
  const recommendations: PersonalizedRecommendations = {
    goBagItems: [],
    evacuationInstructions: [],
    additionalNotes: []
  };

  // Generate go-bag recommendations
  const goBagItems = getGoBagItems(t);
  recommendations.goBagItems = goBagItems.filter(item => {
    // Always include essential items
    if (item.category === 'essential') {
      return true;
    }

    // Include disaster-specific items
    if (item.category === 'disaster') {
      return item.requiredFor.includes(disasterType);
    }

    // Include items based on personal characteristics
    return item.requiredFor.some(condition => {
      switch (condition) {
        case 'wearsGlasses':
          return characteristics.wearsGlasses;
        case 'isPregnant':
          return characteristics.isPregnant;
        case 'hasMobilityIssues':
          return characteristics.hasMobilityIssues;
        case 'isChild':
          return characteristics.isChild;
        case 'hasHearingImpairment':
          return characteristics.hasHearingImpairment;
        case 'hasVisualImpairment':
          return characteristics.hasVisualImpairment;
        case 'hasChildren':
          return characteristics.hasChildren;
        case 'hasPets':
          return characteristics.hasPets;
        case 'takesMedications':
          return characteristics.takesMedications;
        case 'hasDiabetes':
          return characteristics.hasDiabetes;
        case 'hasHypertension':
          return characteristics.hasHypertension;
        case 'hasLowBloodPressure':
          return characteristics.hasLowBloodPressure;
        case 'hasDevelopmentalDisabilities':
          return characteristics.hasDevelopmentalDisabilities;
        case 'livesNearMountain':
          return characteristics.livesNearMountain;
        case 'hasInfant':
          return characteristics.hasInfant;
        case 'hasCar':
          return characteristics.hasCar;
        default:
          return false;
      }
    });
  });

  // Generate evacuation instructions
  const evacuationInstructions = getEvacuationInstructions(t);
  recommendations.evacuationInstructions = evacuationInstructions.filter(instruction => {
    // Always include general instructions
    if (instruction.requiredFor.length === 0) {
      return true;
    }

    // Include specific instructions based on characteristics
    return instruction.requiredFor.some(condition => {
      switch (condition) {
        case 'wearsGlasses':
          return characteristics.wearsGlasses;
        case 'isPregnant':
          return characteristics.isPregnant;
        case 'hasMobilityIssues':
          return characteristics.hasMobilityIssues;
        case 'isChild':
          return characteristics.isChild;
        case 'hasHearingImpairment':
          return characteristics.hasHearingImpairment;
        case 'hasVisualImpairment':
          return characteristics.hasVisualImpairment;
        case 'hasChildren':
          return characteristics.hasChildren;
        case 'hasPets':
          return characteristics.hasPets;
        case 'hasDiabetes':
          return characteristics.hasDiabetes;
        case 'hasHypertension':
          return characteristics.hasHypertension;
        case 'hasLowBloodPressure':
          return characteristics.hasLowBloodPressure;
        case 'hasDevelopmentalDisabilities':
          return characteristics.hasDevelopmentalDisabilities;
        case 'livesNearMountain':
          return characteristics.livesNearMountain;
        case 'hasInfant':
          return characteristics.hasInfant;
        default:
          return false;
      }
    });
  });

  // Add additional notes based on characteristics
  if (characteristics.isElderly) {
    recommendations.additionalNotes.push(t.elderlyNote);
  }

  if (characteristics.isChild) {
    recommendations.additionalNotes.push(t.childNote);
  }

  if (characteristics.hasMedicalConditions && characteristics.medicalConditions.length > 0) {
    recommendations.additionalNotes.push(`${t.medicalConditionsNote} ${characteristics.medicalConditions.join(', ')}`);
  }

  if (characteristics.hasEmergencyContact) {
    recommendations.additionalNotes.push(t.emergencyContactNote);
  }

  if (characteristics.hasDiabetes) {
    recommendations.additionalNotes.push('당뇨병 환자이시므로 혈당 관리에 특히 주의하세요. 인슐린은 보냉가방에 보관하세요.');
  }

  if (characteristics.hasHypertension) {
    recommendations.additionalNotes.push('고혈압 환자이시므로 저염식이를 유지하고 정기적으로 혈압을 측정하세요.');
  }

  if (characteristics.hasLowBloodPressure) {
    recommendations.additionalNotes.push('저혈압 환자이시므로 충분한 수분 섭취와 소금기 있는 간식을 준비하세요.');
  }

  if (characteristics.hasDevelopmentalDisabilities) {
    recommendations.additionalNotes.push('발달장애가 있으시므로 의사소통 도구와 비상 연락망을 준비하세요.');
  }

  if (characteristics.livesNearMountain) {
    recommendations.additionalNotes.push('산 인근 거주자이시므로 산사태와 낙석에 특히 주의하세요.');
  }

  if (characteristics.hasInfant) {
    recommendations.additionalNotes.push('영유아가 있으시므로 분유와 기저귀를 충분히 준비하세요.');
  }

  // Add disaster-specific notes
  switch (disasterType) {
    case 'earthquake':
      recommendations.additionalNotes.push(t.earthquakeNote);
      break;
    case 'flood':
      recommendations.additionalNotes.push(t.floodNote);
      break;
    case 'fire':
      recommendations.additionalNotes.push(t.fireNote);
      break;
    case 'typhoon':
      recommendations.additionalNotes.push(t.typhoonNote);
      break;
    case 'heatwave':
      recommendations.additionalNotes.push(t.heatwaveNote);
      break;
  }

  return recommendations;
}
