import { DisasterType, GoBagItem, EvacuationInstruction, GameMode } from './types';

export const getDisasterTypes = (t: any): DisasterType[] => [
  {
    id: 'earthquake',
    name: t.earthquake,
    description: t.earthquakeDesc,
    icon: '🌍'
  },
  {
    id: 'flood',
    name: t.flood,
    description: t.floodDesc,
    icon: '🌊'
  },
  {
    id: 'fire',
    name: t.fire,
    description: t.fireDesc,
    icon: '🔥'
  },
  {
    id: 'typhoon',
    name: t.typhoon,
    description: t.typhoonDesc,
    icon: '🌀'
  },
  {
    id: 'heatwave',
    name: t.heatwave,
    description: t.heatwaveDesc,
    icon: '☀️'
  }
];

export const getGoBagItems = (t: any): GoBagItem[] => [
  // Essential items
  {
    id: 'water',
    name: t.water,
    description: t.waterDesc,
    category: 'essential',
    priority: 'high',
    requiredFor: [],
    weight: 3000, // 3L water = 3kg
    volume: 3000, // 3L = 3000cm³
    isEssential: true
  },
  {
    id: 'food',
    name: t.food,
    description: t.foodDesc,
    category: 'essential',
    priority: 'high',
    requiredFor: [],
    weight: 1500, // 3 days of food
    volume: 2000,
    isEssential: true
  },
  {
    id: 'flashlight',
    name: t.flashlight,
    description: t.flashlightDesc,
    category: 'essential',
    priority: 'high',
    requiredFor: [],
    weight: 200,
    volume: 300,
    isEssential: true
  },
  {
    id: 'radio',
    name: t.radio,
    description: t.radioDesc,
    category: 'essential',
    priority: 'high',
    requiredFor: [],
    weight: 300,
    volume: 500,
    isEssential: true
  },
  {
    id: 'first_aid',
    name: t.firstAid,
    description: t.firstAidDesc,
    category: 'essential',
    priority: 'high',
    requiredFor: [],
    weight: 500,
    volume: 800,
    isEssential: true
  },
  {
    id: 'whistle',
    name: t.whistle,
    description: t.whistleDesc,
    category: 'essential',
    priority: 'high',
    requiredFor: [],
    weight: 20,
    volume: 10,
    isEssential: true
  },
  {
    id: 'cash',
    name: t.cash,
    description: t.cashDesc,
    category: 'essential',
    priority: 'high',
    requiredFor: [],
    weight: 50,
    volume: 20,
    isEssential: true
  },
  {
    id: 'documents',
    name: t.documents,
    description: t.documentsDesc,
    category: 'essential',
    priority: 'high',
    requiredFor: [],
    weight: 100,
    volume: 200,
    isEssential: true
  },
  {
    id: 'phone_charger',
    name: t.phoneCharger,
    description: t.phoneChargerDesc,
    category: 'essential',
    priority: 'high',
    requiredFor: [],
    weight: 150,
    volume: 100,
    isEssential: true
  },
  {
    id: 'clothes',
    name: t.clothes,
    description: t.clothesDesc,
    category: 'essential',
    priority: 'medium',
    requiredFor: [],
    weight: 800,
    volume: 2000
  },
  {
    id: 'blanket',
    name: t.blanket,
    description: t.blanketDesc,
    category: 'essential',
    priority: 'medium',
    requiredFor: [],
    weight: 300,
    volume: 1000
  },
  {
    id: 'toiletries',
    name: t.toiletries,
    description: t.toiletriesDesc,
    category: 'essential',
    priority: 'medium',
    requiredFor: [],
    weight: 200,
    volume: 300
  },

  // Medical items
  {
    id: 'prescription_meds',
    name: t.prescriptionMeds,
    description: t.prescriptionMedsDesc,
    category: 'medical',
    priority: 'high',
    requiredFor: ['takesMedications'],
    weight: 100,
    volume: 50
  },
  {
    id: 'glasses_extra',
    name: t.glassesExtra,
    description: t.glassesExtraDesc,
    category: 'medical',
    priority: 'high',
    requiredFor: ['wearsGlasses'],
    weight: 50,
    volume: 100
  },
  {
    id: 'hearing_aid_batteries',
    name: t.hearingAidBatteries,
    description: t.hearingAidBatteriesDesc,
    category: 'medical',
    priority: 'high',
    requiredFor: ['hasHearingImpairment'],
    weight: 30,
    volume: 50
  },
  {
    id: 'prenatal_vitamins',
    name: t.prenatalVitamins,
    description: t.prenatalVitaminsDesc,
    category: 'medical',
    priority: 'high',
    requiredFor: ['isPregnant'],
    weight: 80,
    volume: 100
  },
  {
    id: 'mobility_aid',
    name: t.mobilityAid,
    description: t.mobilityAidDesc,
    category: 'medical',
    priority: 'high',
    requiredFor: ['hasMobilityIssues'],
    weight: 200,
    volume: 300
  },

  // Pet items
  {
    id: 'pet_food',
    name: t.petFood,
    description: t.petFoodDesc,
    category: 'pet',
    priority: 'high',
    requiredFor: ['hasPets'],
    weight: 500,
    volume: 800
  },
  {
    id: 'pet_water',
    name: t.petWater,
    description: t.petWaterDesc,
    category: 'pet',
    priority: 'high',
    requiredFor: ['hasPets'],
    weight: 1000,
    volume: 1000
  },
  {
    id: 'pet_carrier',
    name: t.petCarrier,
    description: t.petCarrierDesc,
    category: 'pet',
    priority: 'high',
    requiredFor: ['hasPets'],
    weight: 2000,
    volume: 5000
  },
  {
    id: 'pet_medication',
    name: t.petMedication,
    description: t.petMedicationDesc,
    category: 'pet',
    priority: 'medium',
    requiredFor: ['hasPets'],
    weight: 100,
    volume: 150
  },

  // Special items
  {
    id: 'baby_supplies',
    name: t.babySupplies,
    description: t.babySuppliesDesc,
    category: 'special',
    priority: 'high',
    requiredFor: ['hasChildren'],
    weight: 1500,
    volume: 2000
  },
  {
    id: 'car_keys',
    name: t.carKeys,
    description: t.carKeysDesc,
    category: 'special',
    priority: 'medium',
    requiredFor: ['hasCar'],
    weight: 50,
    volume: 20
  },

  // Diabetes-specific items
  {
    id: 'glucose_meter',
    name: t.glucoseMeter,
    description: t.glucoseMeterDesc,
    category: 'medical',
    priority: 'high',
    requiredFor: ['hasDiabetes'],
    weight: 200,
    volume: 300
  },
  {
    id: 'glucose_strips',
    name: t.glucoseStrips,
    description: t.glucoseStripsDesc,
    category: 'medical',
    priority: 'high',
    requiredFor: ['hasDiabetes'],
    weight: 50,
    volume: 100
  },
  {
    id: 'insulin',
    name: t.insulin,
    description: t.insulinDesc,
    category: 'medical',
    priority: 'high',
    requiredFor: ['hasDiabetes'],
    weight: 150,
    volume: 200
  },
  {
    id: 'insulin_syringes',
    name: t.insulinSyringes,
    description: t.insulinSyringesDesc,
    category: 'medical',
    priority: 'high',
    requiredFor: ['hasDiabetes'],
    weight: 150,
    volume: 200
  },
  {
    id: 'glucose_snacks',
    name: t.glucoseSnacks,
    description: t.glucoseSnacksDesc,
    category: 'medical',
    priority: 'high',
    requiredFor: ['hasDiabetes'],
    weight: 150,
    volume: 200
  },
  {
    id: 'cooler_bag',
    name: t.coolerBag,
    description: t.coolerBagDesc,
    category: 'medical',
    priority: 'high',
    requiredFor: ['hasDiabetes'],
    weight: 150,
    volume: 200
  },
  {
    id: 'sunglasses',
    name: t.sunglasses,
    description: t.sunglassesDesc,
    category: 'medical',
    priority: 'medium',
    requiredFor: ['hasDiabetes']
  ,
    weight: 100,
    volume: 150
  },

  // Hypertension-specific items
  {
    id: 'blood_pressure_monitor',
    name: t.bloodPressureMonitor,
    description: t.bloodPressureMonitorDesc,
    category: 'medical',
    priority: 'high',
    requiredFor: ['hasHypertension']
  },
  {
    id: 'low_salt_food',
    name: t.lowSaltFood,
    description: t.lowSaltFoodDesc,
    category: 'medical',
    priority: 'medium',
    requiredFor: ['hasHypertension']
  ,
    weight: 100,
    volume: 150
  },

  // Low blood pressure items
  {
    id: 'salt_snacks',
    name: t.saltSnacks,
    description: t.saltSnacksDesc,
    category: 'medical',
    priority: 'high',
    requiredFor: ['hasLowBloodPressure']
  },
  {
    id: 'compression_stockings',
    name: t.compressionStockings,
    description: t.compressionStockingsDesc,
    category: 'medical',
    priority: 'medium',
    requiredFor: ['hasLowBloodPressure']
  ,
    weight: 100,
    volume: 150
  },

  // Developmental disabilities items
  {
    id: 'communication_cards',
    name: t.communicationCards,
    description: t.communicationCardsDesc,
    category: 'special',
    priority: 'high',
    requiredFor: ['hasDevelopmentalDisabilities']
  },
  {
    id: 'medical_alert_bracelet',
    name: t.medicalAlertBracelet,
    description: t.medicalAlertBraceletDesc,
    category: 'special',
    priority: 'high',
    requiredFor: ['hasDevelopmentalDisabilities']
  ,
    weight: 500,
    volume: 800
  },
  {
    id: 'comfort_food',
    name: t.comfortFood,
    description: t.comfortFoodDesc,
    category: 'special',
    priority: 'medium',
    requiredFor: ['hasDevelopmentalDisabilities']
  ,
    weight: 500,
    volume: 800
  },
  {
    id: 'comfort_object',
    name: t.comfortObject,
    description: t.comfortObjectDesc,
    category: 'special',
    priority: 'medium',
    requiredFor: ['hasDevelopmentalDisabilities']
  ,
    weight: 500,
    volume: 800
  },
  {
    id: 'noise_cancelling_headphones',
    name: t.noiseCancellingHeadphones,
    description: t.noiseCancellingHeadphonesDesc,
    category: 'special',
    priority: 'medium',
    requiredFor: ['hasDevelopmentalDisabilities']
  ,
    weight: 500,
    volume: 800
  },
  {
    id: 'emergency_manual',
    name: t.emergencyManual,
    description: t.emergencyManualDesc,
    category: 'special',
    priority: 'high',
    requiredFor: ['hasDevelopmentalDisabilities']
  ,
    weight: 500,
    volume: 800
  },

  // Mountain area items
  {
    id: 'emergency_whistle',
    name: t.emergencyWhistle,
    description: t.emergencyWhistleDesc,
    category: 'special',
    priority: 'high',
    requiredFor: ['livesNearMountain']
  },
  {
    id: 'fire_extinguisher',
    name: t.fireExtinguisher,
    description: t.fireExtinguisherDesc,
    category: 'special',
    priority: 'high',
    requiredFor: ['livesNearMountain']
  ,
    weight: 500,
    volume: 800
  },
  {
    id: 'dust_mask',
    name: t.dustMask,
    description: t.dustMaskDesc,
    category: 'special',
    priority: 'high',
    requiredFor: ['livesNearMountain']
  ,
    weight: 500,
    volume: 800
  },
  {
    id: 'landslide_app',
    name: t.landslideApp,
    description: t.landslideAppDesc,
    category: 'special',
    priority: 'medium',
    requiredFor: ['livesNearMountain']
  ,
    weight: 500,
    volume: 800
  },
  {
    id: 'safety_shoes',
    name: t.safetyShoes,
    description: t.safetyShoesDesc,
    category: 'special',
    priority: 'high',
    requiredFor: ['livesNearMountain']
  ,
    weight: 500,
    volume: 800
  },
  {
    id: 'safety_helmet',
    name: t.safetyHelmet,
    description: t.safetyHelmetDesc,
    category: 'special',
    priority: 'high',
    requiredFor: ['livesNearMountain']
  ,
    weight: 500,
    volume: 800
  },
  {
    id: 'evacuation_rope',
    name: t.evacuationRope,
    description: t.evacuationRopeDesc,
    category: 'special',
    priority: 'medium',
    requiredFor: ['livesNearMountain']
  ,
    weight: 500,
    volume: 800
  },
  {
    id: 'portable_lantern',
    name: t.portableLantern,
    description: t.portableLanternDesc,
    category: 'special',
    priority: 'medium',
    requiredFor: ['livesNearMountain']
  ,
    weight: 500,
    volume: 800
  },

  // Infant-specific items
  {
    id: 'formula',
    name: t.formula,
    description: t.formulaDesc,
    category: 'family',
    priority: 'high',
    requiredFor: ['hasInfant']
  },
  {
    id: 'baby_carrier',
    name: t.babyCarrier,
    description: t.babyCarrierDesc,
    category: 'family',
    priority: 'high',
    requiredFor: ['hasInfant']
  ,
    weight: 1500,
    volume: 2000
  },
  {
    id: 'familiar_toy',
    name: t.familiarToy,
    description: t.familiarToyDesc,
    category: 'family',
    priority: 'medium',
    requiredFor: ['hasInfant']
  ,
    weight: 500,
    volume: 800
  },
  {
    id: 'bottle_set',
    name: t.bottleSet,
    description: t.bottleSetDesc,
    category: 'family',
    priority: 'high',
    requiredFor: ['hasInfant']
  ,
    weight: 500,
    volume: 800
  },
  {
    id: 'diaper_cream',
    name: t.diaperCream,
    description: t.diaperCreamDesc,
    category: 'family',
    priority: 'medium',
    requiredFor: ['hasInfant']
  ,
    weight: 500,
    volume: 800
  },
  {
    id: 'diaper_bags',
    name: t.diaperBags,
    description: t.diaperBagsDesc,
    category: 'family',
    priority: 'medium',
    requiredFor: ['hasInfant']
  ,
    weight: 500,
    volume: 800
  },

  // Glasses/contact lens items
  {
    id: 'contact_lenses',
    name: t.contactLenses,
    description: t.contactLensesDesc,
    category: 'medical',
    priority: 'high',
    requiredFor: ['wearsGlasses']
  },
  {
    id: 'lens_solution',
    name: t.lensSolution,
    description: t.lensSolutionDesc,
    category: 'medical',
    priority: 'high',
    requiredFor: ['wearsGlasses']
  ,
    weight: 150,
    volume: 200
  },
  {
    id: 'lens_case',
    name: t.lensCase,
    description: t.lensCaseDesc,
    category: 'medical',
    priority: 'medium',
    requiredFor: ['wearsGlasses']
  ,
    weight: 100,
    volume: 150
  },
  {
    id: 'lens_tweezers',
    name: t.lensTweezers,
    description: t.lensTweezersDesc,
    category: 'medical',
    priority: 'low',
    requiredFor: ['wearsGlasses']
  ,
    weight: 80,
    volume: 120
  },
  {
    id: 'glasses_cleaner',
    name: t.glassesCleaner,
    description: t.glassesCleanerDesc,
    category: 'medical',
    priority: 'medium',
    requiredFor: ['wearsGlasses']
  ,
    weight: 100,
    volume: 150
  },
  {
    id: 'glasses_case',
    name: t.glassesCase,
    description: t.glassesCaseDesc,
    category: 'medical',
    priority: 'medium',
    requiredFor: ['wearsGlasses']
  ,
    weight: 100,
    volume: 150
  },
  {
    id: 'glasses_strap',
    name: t.glassesStrap,
    description: t.glassesStrapDesc,
    category: 'medical',
    priority: 'low',
    requiredFor: ['wearsGlasses']
  ,
    weight: 80,
    volume: 120
  },
  {
    id: 'artificial_tears',
    name: t.artificialTears,
    description: t.artificialTearsDesc,
    category: 'medical',
    priority: 'medium',
    requiredFor: ['wearsGlasses']
  ,
    weight: 100,
    volume: 150
  },
  {
    id: 'hand_sanitizer',
    name: t.handSanitizer,
    description: t.handSanitizerDesc,
    category: 'medical',
    priority: 'high',
    requiredFor: ['wearsGlasses']
  },

  // Earthquake-specific items
  {
    id: 'safety_helmet_earthquake',
    name: t.safetyHelmetEarthquake,
    description: t.safetyHelmetEarthquakeDesc,
    category: 'disaster',
    priority: 'high',
    requiredFor: ['earthquake'],
    weight: 800,
    volume: 2000
  },
  {
    id: 'safety_gloves',
    name: t.safetyGloves,
    description: t.safetyGlovesDesc,
    category: 'disaster',
    priority: 'high',
    requiredFor: ['earthquake'],
    weight: 100,
    volume: 200
  },
  {
    id: 'sturdy_shoes',
    name: t.sturdyShoes,
    description: t.sturdyShoesDesc,
    category: 'disaster',
    priority: 'high',
    requiredFor: ['earthquake'],
    weight: 1200,
    volume: 3000
  },
  {
    id: 'multi_tool',
    name: t.multiTool,
    description: t.multiToolDesc,
    category: 'disaster',
    priority: 'medium',
    requiredFor: ['earthquake'],
    weight: 300,
    volume: 400
  },
  {
    id: 'dust_mask_earthquake',
    name: t.dustMaskEarthquake,
    description: t.dustMaskEarthquakeDesc,
    category: 'disaster',
    priority: 'high',
    requiredFor: ['earthquake'],
    weight: 50,
    volume: 100
  },

  // Flood-specific items
  {
    id: 'waterproof_bags',
    name: t.waterproofBags,
    description: t.waterproofBagsDesc,
    category: 'disaster',
    priority: 'high',
    requiredFor: ['flood'],
    weight: 200,
    volume: 500
  },
  {
    id: 'waterproof_pouch',
    name: t.waterproofPouch,
    description: t.waterproofPouchDesc,
    category: 'disaster',
    priority: 'high',
    requiredFor: ['flood'],
    weight: 100,
    volume: 200
  },
  {
    id: 'rubber_boots',
    name: t.rubberBoots,
    description: t.rubberBootsDesc,
    category: 'disaster',
    priority: 'high',
    requiredFor: ['flood'],
    weight: 800,
    volume: 1500
  },
  {
    id: 'raincoat',
    name: t.raincoat,
    description: t.raincoatDesc,
    category: 'disaster',
    priority: 'high',
    requiredFor: ['flood'],
    weight: 800,
    volume: 1500
  },
  {
    id: 'flotation_device',
    name: t.flotationDevice,
    description: t.flotationDeviceDesc,
    category: 'disaster',
    priority: 'high',
    requiredFor: ['flood']
  ,
    weight: 500,
    volume: 1000
  },

  // Fire-specific items
  {
    id: 'smoke_mask',
    name: t.smokeMask,
    description: t.smokeMaskDesc,
    category: 'disaster',
    priority: 'high',
    requiredFor: ['fire']
  },
  {
    id: 'portable_fire_extinguisher',
    name: t.portableFireExtinguisher,
    description: t.portableFireExtinguisherDesc,
    category: 'disaster',
    priority: 'high',
    requiredFor: ['fire']
  ,
    weight: 1000,
    volume: 1500
  },
  {
    id: 'escape_route_map',
    name: t.escapeRouteMap,
    description: t.escapeRouteMapDesc,
    category: 'disaster',
    priority: 'medium',
    requiredFor: ['fire']
  ,
    weight: 50,
    volume: 100
  },

  // Typhoon-specific items
  {
    id: 'sealed_containers',
    name: t.sealedContainers,
    description: t.sealedContainersDesc,
    category: 'disaster',
    priority: 'medium',
    requiredFor: ['typhoon']
  },
  {
    id: 'reinforcement_tape',
    name: t.reinforcementTape,
    description: t.reinforcementTapeDesc,
    category: 'disaster',
    priority: 'medium',
    requiredFor: ['typhoon']
  ,
    weight: 300,
    volume: 600
  },

  // Heatwave-specific items
  {
    id: 'electrolyte_powder',
    name: t.electrolytePowder,
    description: t.electrolytePowderDesc,
    category: 'disaster',
    priority: 'high',
    requiredFor: ['heatwave']
  },
  {
    id: 'reusable_water_bottle',
    name: t.reusableWaterBottle,
    description: t.reusableWaterBottleDesc,
    category: 'disaster',
    priority: 'high',
    requiredFor: ['heatwave']
  ,
    weight: 200,
    volume: 300
  },
  {
    id: 'uv_hat',
    name: t.uvHat,
    description: t.uvHatDesc,
    category: 'disaster',
    priority: 'high',
    requiredFor: ['heatwave']
  ,
    weight: 200,
    volume: 500
  },
  {
    id: 'breathable_clothing',
    name: t.breathableClothing,
    description: t.breathableClothingDesc,
    category: 'disaster',
    priority: 'medium',
    requiredFor: ['heatwave']
  ,
    weight: 200,
    volume: 500
  },
  {
    id: 'sunscreen',
    name: t.sunscreen,
    description: t.sunscreenDesc,
    category: 'disaster',
    priority: 'high',
    requiredFor: ['heatwave']
  ,
    weight: 150,
    volume: 200
  },
  {
    id: 'portable_umbrella',
    name: t.portableUmbrella,
    description: t.portableUmbrellaDesc,
    category: 'disaster',
    priority: 'medium',
    requiredFor: ['heatwave']
  ,
    weight: 150,
    volume: 200
  },
  {
    id: 'cooling_towel',
    name: t.coolingTowel,
    description: t.coolingTowelDesc,
    category: 'disaster',
    priority: 'medium',
    requiredFor: ['heatwave']
  ,
    weight: 100,
    volume: 150
  },
  {
    id: 'portable_fan',
    name: t.portableFan,
    description: t.portableFanDesc,
    category: 'disaster',
    priority: 'low',
    requiredFor: ['heatwave']
  ,
    weight: 100,
    volume: 150
  }
];

export const getEvacuationInstructions = (t: any): EvacuationInstruction[] => [
  {
    id: 'stay_calm',
    title: t.stayCalm,
    description: t.stayCalmDesc,
    priority: 'high',
    requiredFor: []
  },
  {
    id: 'follow_officials',
    title: t.followOfficials,
    description: t.followOfficialsDesc,
    priority: 'high',
    requiredFor: []
  ,
    weight: 150,
    volume: 200
  },
  {
    id: 'avoid_elevators',
    title: t.avoidElevators,
    description: t.avoidElevatorsDesc,
    priority: 'high',
    requiredFor: []
  ,
    weight: 150,
    volume: 200
  },
  {
    id: 'use_stairs',
    title: t.useStairs,
    description: t.useStairsDesc,
    priority: 'high',
    requiredFor: []
  ,
    weight: 150,
    volume: 200
  },
  {
    id: 'help_others',
    title: t.helpOthers,
    description: t.helpOthersDesc,
    priority: 'medium',
    requiredFor: []
  ,
    weight: 100,
    volume: 150
  },
  {
    id: 'mobility_assistance',
    title: t.mobilityAssistance,
    description: t.mobilityAssistanceDesc,
    priority: 'high',
    requiredFor: ['hasMobilityIssues']
  ,
    weight: 150,
    volume: 200
  },
  {
    id: 'pregnant_evacuation',
    title: t.pregnantEvacuation,
    description: t.pregnantEvacuationDesc,
    priority: 'high',
    requiredFor: ['isPregnant']
  ,
    weight: 150,
    volume: 200
  },
  {
    id: 'children_safety',
    title: t.childrenSafety,
    description: t.childrenSafetyDesc,
    priority: 'high',
    requiredFor: ['hasChildren']
  ,
    weight: 150,
    volume: 200
  },
  {
    id: 'pet_evacuation',
    title: t.petEvacuation,
    description: t.petEvacuationDesc,
    priority: 'medium',
    requiredFor: ['hasPets']
  ,
    weight: 100,
    volume: 150
  },
  {
    id: 'hearing_impaired',
    title: t.hearingImpaired,
    description: t.hearingImpairedDesc,
    priority: 'high',
    requiredFor: ['hasHearingImpairment']
  ,
    weight: 150,
    volume: 200
  },
  {
    id: 'visual_impaired',
    title: t.visualImpaired,
    description: t.visualImpairedDesc,
    priority: 'high',
    requiredFor: ['hasVisualImpairment']
  }
];

export const getGameModes = (t: any): GameMode[] => [
  {
    id: 'backpack',
    name: t.backpackMode,
    description: t.backpackModeDesc,
    constraints: {
      maxWeight: 10000, // 10kg
      maxVolume: 30000, // 30L
      maxItems: 25
    },
    icon: '🎒'
  },
  {
    id: 'duffel',
    name: t.duffelMode,
    description: t.duffelModeDesc,
    constraints: {
      maxWeight: 15000, // 15kg
      maxVolume: 50000, // 50L
      maxItems: 35
    },
    icon: '👜'
  },
  {
    id: 'emergency',
    name: t.emergencyMode,
    description: t.emergencyModeDesc,
    constraints: {
      maxWeight: 5000, // 5kg
      maxVolume: 15000, // 15L
      maxItems: 15
    },
    icon: '🚨'
  },
  {
    id: 'family',
    name: t.familyMode,
    description: t.familyModeDesc,
    constraints: {
      maxWeight: 25000, // 25kg
      maxVolume: 80000, // 80L
      maxItems: 50
    },
    icon: '👨‍👩‍👧‍👦'
  }
];

