export interface Translations {
  // App title and header
  appTitle: string;
  appSubtitle: string;
  copyright: string;
  
  // Steps
  step1: string;
  step2: string;
  step3: string;
  disasterSelection: string;
  personalCharacteristics: string;
  personalizedInfo: string;
  
  // Disaster types
  earthquake: string;
  flood: string;
  fire: string;
  typhoon: string;
  heatwave: string;
  
  // Disaster descriptions
  earthquakeDesc: string;
  floodDesc: string;
  fireDesc: string;
  typhoonDesc: string;
  heatwaveDesc: string;
  
  // Personal characteristics
  physicalCharacteristics: string;
  familyPets: string;
  medicalInfo: string;
  otherInfo: string;
  specialCircumstances: string;
  familyCategory: string;
  
  // Physical characteristics
  wearsGlasses: string;
  isPregnant: string;
  hasMobilityIssues: string;
  isElderly: string;
  isChild: string;
  hasHearingImpairment: string;
  hasVisualImpairment: string;
  
  // Specific medical conditions
  hasDiabetes: string;
  hasHypertension: string;
  hasLowBloodPressure: string;
  hasDevelopmentalDisabilities: string;
  
  // Special circumstances
  livesNearMountain: string;
  hasInfant: string;
  
  // Family & pets
  hasChildren: string;
  hasPets: string;
  petType: string;
  selectPetType: string;
  dog: string;
  cat: string;
  bird: string;
  other: string;
  
  // Medical
  hasMedicalConditions: string;
  takesMedications: string;
  medicalConditions: string;
  medications: string;
  medicalConditionsPlaceholder: string;
  medicationsPlaceholder: string;
  
  // Other info
  hasCar: string;
  hasEmergencyContact: string;
  
  // Buttons
  next: string;
  back: string;
  generatePersonalizedInfo: string;
  startOver: string;
  download: string;
  print: string;
  
  // Results
  goBagItems: string;
  evacuationInstructions: string;
  additionalNotes: string;
  priority: string;
  high: string;
  medium: string;
  low: string;
  
  // Categories
  essential: string;
  medical: string;
  personal: string;
  pet: string;
  special: string;
  disaster: string;
  family: string;
  
  // Game mode selection
  gameModeSelection: string;
  bagPackingGame: string;
  gameModeDescription: string;
  
  // Game modes
  backpackMode: string;
  duffelMode: string;
  emergencyMode: string;
  familyMode: string;
  childBagMode: string;
  
  // Game mode descriptions
  backpackModeDesc: string;
  duffelModeDesc: string;
  emergencyModeDesc: string;
  familyModeDesc: string;
  childBagModeDesc: string;
  
  // Game mode constraints
  maxWeight: string;
  maxVolume: string;
  maxItems: string;
  items: string;
  
  // Buttons
  startGame: string;
  
  // Bag packing game
  weight: string;
  volume: string;
  score: string;
  scoreDescription: string;
  availableItems: string;
  packedItems: string;
  clickToAdd: string;
  inBag: string;
  itemsCount: string;
  noItemsPacked: string;
  complete: string;
  
  // Overcapacity alerts
  overcapacityAlert: string;
  weightExceeded: string;
  volumeExceeded: string;
  itemCountExceeded: string;
  removeItemsToFit: string;
  
  // Go-bag items
  water: string;
  food: string;
  flashlight: string;
  radio: string;
  firstAid: string;
  whistle: string;
  cash: string;
  documents: string;
  phoneCharger: string;
  clothes: string;
  blanket: string;
  toiletries: string;
  prescriptionMeds: string;
  glassesExtra: string;
  hearingAidBatteries: string;
  prenatalVitamins: string;
  mobilityAid: string;
  petFood: string;
  petWater: string;
  petCarrier: string;
  petMedication: string;
  babySupplies: string;
  carKeys: string;
  
  // Item descriptions
  waterDesc: string;
  foodDesc: string;
  flashlightDesc: string;
  radioDesc: string;
  firstAidDesc: string;
  whistleDesc: string;
  cashDesc: string;
  documentsDesc: string;
  phoneChargerDesc: string;
  clothesDesc: string;
  blanketDesc: string;
  toiletriesDesc: string;
  prescriptionMedsDesc: string;
  glassesExtraDesc: string;
  hearingAidBatteriesDesc: string;
  prenatalVitaminsDesc: string;
  mobilityAidDesc: string;
  petFoodDesc: string;
  petWaterDesc: string;
  petCarrierDesc: string;
  petMedicationDesc: string;
  babySuppliesDesc: string;
  carKeysDesc: string;
  
  // Evacuation instructions
  stayCalm: string;
  followOfficials: string;
  avoidElevators: string;
  useStairs: string;
  helpOthers: string;
  mobilityAssistance: string;
  pregnantEvacuation: string;
  childrenSafety: string;
  childEvacuation: string;
  petEvacuation: string;
  hearingImpaired: string;
  visualImpaired: string;
  
  // Instruction descriptions
  stayCalmDesc: string;
  followOfficialsDesc: string;
  avoidElevatorsDesc: string;
  useStairsDesc: string;
  helpOthersDesc: string;
  mobilityAssistanceDesc: string;
  pregnantEvacuationDesc: string;
  childrenSafetyDesc: string;
  childEvacuationDesc: string;
  petEvacuationDesc: string;
  hearingImpairedDesc: string;
  visualImpairedDesc: string;
  
  // Additional notes
  elderlyNote: string;
  childNote: string;
  medicalConditionsNote: string;
  emergencyContactNote: string;
  
  // Disaster-specific notes
  earthquakeNote: string;
  floodNote: string;
  fireNote: string;
  typhoonNote: string;
  heatwaveNote: string;
  
  // UI text
  selectDisaster: string;
  selectDisasterDesc: string;
  personalizedFor: string;
  generatedOn: string;
  selectLanguage: string;
  
  // New detailed medical items
  glucoseMeter: string;
  glucoseStrips: string;
  insulin: string;
  insulinSyringes: string;
  glucoseSnacks: string;
  coolerBag: string;
  sunglasses: string;
  bloodPressureMonitor: string;
  lowSaltFood: string;
  saltSnacks: string;
  compressionStockings: string;
  communicationCards: string;
  medicalAlertBracelet: string;
  comfortFood: string;
  comfortObject: string;
  noiseCancellingHeadphones: string;
  emergencyManual: string;
  emergencyWhistle: string;
  fireExtinguisher: string;
  dustMask: string;
  landslideApp: string;
  safetyShoes: string;
  safetyHelmet: string;
  evacuationRope: string;
  portableLantern: string;
  formula: string;
  babyCarrier: string;
  familiarToy: string;
  bottleSet: string;
  diaperCream: string;
  diaperBags: string;
  contactLenses: string;
  lensSolution: string;
  lensCase: string;
  lensTweezers: string;
  glassesCleaner: string;
  glassesCase: string;
  glassesStrap: string;
  artificialTears: string;
  handSanitizer: string;
  
  // Child-specific items
  pictureBook: string;
  comicBook: string;
  familyPhoto: string;
  puzzle: string;
  toy: string;
  doll: string;
  notebook: string;
  pen: string;
  pencil: string;
  coloredPencils: string;
  childMask: string;
  childSafetyVest: string;
  childWhistle: string;
  childHelmet: string;
  favoriteSnacks: string;
  childToothbrushSet: string;
  
  // Descriptions for new items
  glucoseMeterDesc: string;
  glucoseStripsDesc: string;
  insulinDesc: string;
  insulinSyringesDesc: string;
  glucoseSnacksDesc: string;
  coolerBagDesc: string;
  sunglassesDesc: string;
  bloodPressureMonitorDesc: string;
  lowSaltFoodDesc: string;
  saltSnacksDesc: string;
  compressionStockingsDesc: string;
  communicationCardsDesc: string;
  medicalAlertBraceletDesc: string;
  comfortFoodDesc: string;
  comfortObjectDesc: string;
  noiseCancellingHeadphonesDesc: string;
  emergencyManualDesc: string;
  emergencyWhistleDesc: string;
  fireExtinguisherDesc: string;
  dustMaskDesc: string;
  landslideAppDesc: string;
  safetyShoesDesc: string;
  safetyHelmetDesc: string;
  evacuationRopeDesc: string;
  portableLanternDesc: string;
  formulaDesc: string;
  babyCarrierDesc: string;
  familiarToyDesc: string;
  bottleSetDesc: string;
  diaperCreamDesc: string;
  diaperBagsDesc: string;
  contactLensesDesc: string;
  lensSolutionDesc: string;
  lensCaseDesc: string;
  lensTweezersDesc: string;
  glassesCleanerDesc: string;
  glassesCaseDesc: string;
  glassesStrapDesc: string;
  artificialTearsDesc: string;
  handSanitizerDesc: string;
  
  // Child-specific item descriptions
  pictureBookDesc: string;
  comicBookDesc: string;
  familyPhotoDesc: string;
  puzzleDesc: string;
  toyDesc: string;
  dollDesc: string;
  notebookDesc: string;
  penDesc: string;
  pencilDesc: string;
  coloredPencilsDesc: string;
  childMaskDesc: string;
  childSafetyVestDesc: string;
  childWhistleDesc: string;
  childHelmetDesc: string;
  favoriteSnacksDesc: string;
  childToothbrushSetDesc: string;
  
  // Disaster-specific items
  safetyHelmetEarthquake: string;
  safetyGloves: string;
  sturdyShoes: string;
  multiTool: string;
  dustMaskEarthquake: string;
  waterproofBags: string;
  waterproofPouch: string;
  rubberBoots: string;
  raincoat: string;
  flotationDevice: string;
  smokeMask: string;
  portableFireExtinguisher: string;
  escapeRouteMap: string;
  sealedContainers: string;
  reinforcementTape: string;
  electrolytePowder: string;
  reusableWaterBottle: string;
  uvHat: string;
  breathableClothing: string;
  sunscreen: string;
  portableUmbrella: string;
  coolingTowel: string;
  portableFan: string;
  
  // Disaster-specific descriptions
  safetyHelmetEarthquakeDesc: string;
  safetyGlovesDesc: string;
  sturdyShoesDesc: string;
  multiToolDesc: string;
  dustMaskEarthquakeDesc: string;
  waterproofBagsDesc: string;
  waterproofPouchDesc: string;
  rubberBootsDesc: string;
  raincoatDesc: string;
  flotationDeviceDesc: string;
  smokeMaskDesc: string;
  portableFireExtinguisherDesc: string;
  escapeRouteMapDesc: string;
  sealedContainersDesc: string;
  reinforcementTapeDesc: string;
  electrolytePowderDesc: string;
  reusableWaterBottleDesc: string;
  uvHatDesc: string;
  breathableClothingDesc: string;
  sunscreenDesc: string;
  portableUmbrellaDesc: string;
  coolingTowelDesc: string;
  portableFanDesc: string;
}

export const translations: Record<'ko' | 'en', Translations> = {
  ko: {
    // App title and header
    appTitle: '안심 (Ansim)',
    appSubtitle: '개인 맞춤형 재난 대비 정보 플랫폼',
    copyright: '© 2024 Ansim - 재난 대비를 위한 개인 맞춤형 정보 플랫폼',
    
    // Steps
    step1: '재난 유형',
    step2: '개인 특성',
    step3: '맞춤 정보',
    disasterSelection: '재난 유형 선택',
    personalCharacteristics: '개인 특성 입력',
    personalizedInfo: '맞춤형 정보',
    
    // Disaster types
    earthquake: '지진',
    flood: '홍수',
    fire: '화재',
    typhoon: '태풍',
    heatwave: '폭염',
    
    // Disaster descriptions
    earthquakeDesc: '지진 발생 시 대비책',
    floodDesc: '홍수 및 수해 대비책',
    fireDesc: '화재 및 산불 대비책',
    typhoonDesc: '태풍 및 강풍 대비책',
    heatwaveDesc: '폭염 및 고온 대비책',
    
    // Personal characteristics
    physicalCharacteristics: '신체적 특성',
    familyPets: '가족 및 반려동물',
    medicalInfo: '의료 정보',
    otherInfo: '기타 정보',
    specialCircumstances: '특수상황',
    familyCategory: '가족',
    
    // Physical characteristics
    wearsGlasses: '안경을 착용합니다',
    isPregnant: '임신 중입니다',
    hasMobilityIssues: '보행에 어려움이 있습니다',
    isElderly: '65세 이상입니다',
    isChild: '저는 어린이입니다',
    hasHearingImpairment: '청각에 어려움이 있습니다',
    hasVisualImpairment: '시각에 어려움이 있습니다',
    
    // Specific medical conditions
    hasDiabetes: '당뇨병 환자입니다',
    hasHypertension: '고혈압 환자입니다',
    hasLowBloodPressure: '저혈압 환자입니다',
    hasDevelopmentalDisabilities: '발달장애가 있습니다',
    
    // Special circumstances
    livesNearMountain: '산 인근에 거주합니다',
    hasInfant: '영유아가 있습니다',
    
    // Family & pets
    hasChildren: '미성년 자녀가 있습니다',
    hasPets: '반려동물이 있습니다',
    petType: '반려동물 종류',
    selectPetType: '선택하세요',
    dog: '개',
    cat: '고양이',
    bird: '새',
    other: '기타',
    
    // Medical
    hasMedicalConditions: '만성질환이 있습니다',
    takesMedications: '정기적으로 약을 복용합니다',
    medicalConditions: '질환명 (쉼표로 구분)',
    medications: '복용 약물 (쉼표로 구분)',
    medicalConditionsPlaceholder: '예: 고혈압, 당뇨병',
    medicationsPlaceholder: '예: 혈압약, 당뇨약',
    
    // Other info
    hasCar: '자동차를 소유하고 있습니다',
    hasEmergencyContact: '비상연락처를 알고 있습니다',
    
    // Buttons
    next: '다음',
    back: '이전',
    generatePersonalizedInfo: '맞춤형 정보 생성',
    startOver: '처음부터',
    download: '다운로드',
    print: '인쇄',
    
    // Results
    goBagItems: '비상가방 준비물',
    evacuationInstructions: '대피 지침',
    additionalNotes: '추가 주의사항',
    priority: '우선순위',
    high: '높음',
    medium: '보통',
    low: '낮음',
    
    // Categories
    essential: '필수품',
    medical: '의료용품',
    personal: '개인용품',
    pet: '반려동물용품',
    special: '특수용품',
    disaster: '재난별 특수용품',
    family: '가족용품',
    
    // Game mode selection
    gameModeSelection: '게임 모드 선택',
    bagPackingGame: '가방 패킹 게임',
    gameModeDescription: '제한된 공간과 무게 안에서 필요한 아이템들을 전략적으로 선택해보세요!',
    
    // Game modes
    backpackMode: '배낭 모드',
    duffelMode: '덤플백 모드',
    emergencyMode: '비상용 모드',
    familyMode: '가족용 모드',
    childBagMode: '어린이용 가방 모드',
    
    // Game mode descriptions
    backpackModeDesc: '일반적인 등산 배낭 (30L)',
    duffelModeDesc: '중형 덤플백 (50L)',
    emergencyModeDesc: '소형 비상용 가방 (15L)',
    familyModeDesc: '대형 가족용 가방 (80L)',
    childBagModeDesc: '어린이용 가방 (20L)',
    
    // Game mode constraints
    maxWeight: '최대 무게',
    maxVolume: '최대 부피',
    maxItems: '최대 아이템',
    items: '개',
    
    // Buttons
    startGame: '게임 시작',
    
    // Bag packing game
    weight: '무게',
    volume: '부피',
    score: '점수',
    scoreDescription: '우선순위가 높은 아이템일수록 높은 점수',
    availableItems: '사용 가능한 아이템',
    packedItems: '가방에 넣은 아이템',
    clickToAdd: '클릭하여 가방에 추가',
    inBag: '가방에',
    itemsCount: '개',
    noItemsPacked: '아이템을 클릭하여 가방에 넣어보세요',
    complete: '완료!',
    
    // Overcapacity alerts
    overcapacityAlert: '가방 용량 초과!',
    weightExceeded: '무게 초과',
    volumeExceeded: '부피 초과',
    itemCountExceeded: '아이템 수 초과',
    removeItemsToFit: '아이템을 제거하여 용량을 맞춰주세요.',
    
    // Go-bag items
    water: '생수 (1인당 3L)',
    food: '비상식량 (3일분)',
    flashlight: '손전등',
    radio: '라디오',
    firstAid: '응급처치 키트',
    whistle: '호루라기',
    cash: '현금',
    documents: '중요 서류',
    phoneCharger: '휴대폰 충전기',
    clothes: '여벌 옷',
    blanket: '담요',
    toiletries: '세면용품',
    prescriptionMeds: '처방약',
    glassesExtra: '여분 안경',
    hearingAidBatteries: '보청기 배터리',
    prenatalVitamins: '엽산제',
    mobilityAid: '보행보조기',
    petFood: '반려동물 사료',
    petWater: '반려동물 물',
    petCarrier: '반려동물 이동장',
    petMedication: '반려동물 약',
    babySupplies: '유아용품',
    carKeys: '차 키',
    
    // Item descriptions
    waterDesc: '3일간 충분한 물 공급',
    foodDesc: '캔음식, 건빵, 에너지바 등',
    flashlightDesc: '배터리 포함, LED 추천',
    radioDesc: '수동 충전 또는 배터리',
    firstAidDesc: '붕대, 소독약, 진통제 등',
    whistleDesc: '구조 신호용',
    cashDesc: '소액 지폐와 동전',
    documentsDesc: '신분증, 보험증서, 통장 등',
    phoneChargerDesc: '보조배터리 포함',
    clothesDesc: '3일간 입을 옷',
    blanketDesc: '응급용 담요',
    toiletriesDesc: '칫솔, 수건, 비누 등',
    prescriptionMedsDesc: '3일분 처방약',
    glassesExtraDesc: '안경 착용자용',
    hearingAidBatteriesDesc: '보청기 착용자용',
    prenatalVitaminsDesc: '임신부용',
    mobilityAidDesc: '지팡이, 휠체어 등',
    petFoodDesc: '3일분 반려동물 사료',
    petWaterDesc: '반려동물용 물',
    petCarrierDesc: '반려동물 운반용',
    petMedicationDesc: '반려동물 처방약',
    babySuppliesDesc: '기저귀, 분유, 젖병 등',
    carKeysDesc: '자동차 소유자용',
    
    // Evacuation instructions
    stayCalm: '침착하게 행동하세요',
    followOfficials: '관계기관 지시를 따르세요',
    avoidElevators: '엘리베이터 사용 금지',
    useStairs: '계단을 이용하세요',
    helpOthers: '다른 사람을 도우세요',
    mobilityAssistance: '보행보조기 사용',
    pregnantEvacuation: '임신부 특별 주의',
    childrenSafety: '아이 안전 확보',
    childEvacuation: '어린이 대피 안내',
    petEvacuation: '반려동물 대피',
    hearingImpaired: '청각장애인 주의사항',
    visualImpaired: '시각장애인 주의사항',
    
    // Instruction descriptions
    stayCalmDesc: '당황하지 말고 주변 상황을 파악한 후 안전한 곳으로 이동하세요.',
    followOfficialsDesc: '소방서, 경찰서, 구청 등 공식 기관의 지시를 우선적으로 따르세요.',
    avoidElevatorsDesc: '지진이나 화재 시에는 엘리베이터를 사용하지 마세요.',
    useStairsDesc: '안전한 계단을 통해 이동하세요.',
    helpOthersDesc: '안전한 상황에서 주변 사람들을 도와주세요.',
    mobilityAssistanceDesc: '보행이 어려운 경우 보조기를 사용하여 안전하게 이동하세요.',
    pregnantEvacuationDesc: '무리하지 말고 천천히 이동하며, 복부를 보호하세요.',
    childrenSafetyDesc: '아이의 손을 잡고 함께 이동하며, 아이가 혼자 남지 않도록 주의하세요.',
    childEvacuationDesc: '어른들과 함께 이동하고, 혼자 떨어지지 않도록 주의하세요. 도움이 필요하면 호루라기를 불어주세요.',
    petEvacuationDesc: '반려동물을 이동장에 넣고 함께 대피하세요.',
    hearingImpairedDesc: '시각적 신호에 주의하고, 주변 사람들에게 도움을 요청하세요.',
    visualImpairedDesc: '안내견이나 지팡이를 사용하고, 주변 사람들의 도움을 받으세요.',
    
    // Additional notes
    elderlyNote: '고령자이시므로 무리하지 말고 천천히 행동하세요.',
    childNote: '어린이이므로 어른들과 함께 행동하고, 혼자 떨어지지 않도록 주의하세요.',
    medicalConditionsNote: '의료진에게 다음 질환을 알려주세요:',
    emergencyContactNote: '비상연락처를 기억하고 있거나 휴대폰에 저장해두세요.',
    
    // Disaster-specific notes
    earthquakeNote: '지진 발생 시 책상 아래로 들어가거나 문틀 아래로 이동하세요.',
    floodNote: '홍수 시 높은 곳으로 대피하고, 차량 운전을 피하세요.',
    fireNote: '화재 시 낮은 자세로 이동하고, 문을 열기 전에 손잡이 온도를 확인하세요.',
    typhoonNote: '태풍 시 창문에서 멀리 떨어져 있고, 외출을 피하세요.',
    heatwaveNote: '폭염 시 충분한 수분을 섭취하고, 그늘에서 휴식을 취하세요.',
    
    // UI text
    selectDisaster: '어떤 재난에 대한 대비 정보가 필요하신가요?',
    selectDisasterDesc: '귀하의 개인 특성에 맞는 재난 대비 정보를 제공합니다.',
    personalizedFor: '대비 맞춤형 정보',
    generatedOn: '생성일시',
    selectLanguage: '언어 선택',
    
    // New detailed medical items
    glucoseMeter: '혈당 측정기',
    glucoseStrips: '혈당 시험지',
    insulin: '인슐린',
    insulinSyringes: '인슐린 주사기',
    glucoseSnacks: '당분 보충 간식',
    coolerBag: '보냉가방',
    sunglasses: '선글라스',
    bloodPressureMonitor: '혈압계',
    lowSaltFood: '저염 간편식',
    saltSnacks: '소금기 있는 간식',
    compressionStockings: '압박스타킹',
    communicationCards: '의사소통 도구',
    medicalAlertBracelet: '의료 알림 팔찌',
    comfortFood: '익숙한 간식',
    comfortObject: '애착 물품',
    noiseCancellingHeadphones: '소음 차단용 귀마개',
    emergencyManual: '비상 상황 대처 매뉴얼',
    emergencyWhistle: '비상용 호루라기',
    fireExtinguisher: '방화포',
    dustMask: '방수방진 마스크',
    landslideApp: '산사태낙석 경보 앱',
    safetyShoes: '안전화',
    safetyHelmet: '안전모',
    evacuationRope: '대피용 로프',
    portableLantern: '휴대용 랜턴',
    formula: '분유·조제식',
    babyCarrier: '아기띠',
    familiarToy: '익숙한 소형 장난감',
    bottleSet: '젖병·수유 용품 세트',
    diaperCream: '기저귀 발진 방지 크림',
    diaperBags: '기저귀 전용 쓰레기 봉투',
    contactLenses: '렌즈',
    lensSolution: '렌즈세정액',
    lensCase: '렌즈통',
    lensTweezers: '렌즈 집게',
    glassesCleaner: '안경닦이',
    glassesCase: '안경 케이스',
    glassesStrap: '안경 스트랩',
    artificialTears: '인공눈물액',
    handSanitizer: '손 소독제',
    
    // Child-specific items
    pictureBook: '그림책',
    comicBook: '만화책',
    familyPhoto: '가족사진',
    puzzle: '퍼즐',
    toy: '장난감',
    doll: '인형',
    notebook: '노트',
    pen: '펜',
    pencil: '연필',
    coloredPencils: '색연필',
    childMask: '어린이용 마스크',
    childSafetyVest: '어린이 안전 조끼',
    childWhistle: '호루라기',
    childHelmet: '어린이 헬멧',
    favoriteSnacks: '좋아하는 과자',
    childToothbrushSet: '어린이용 양치 세트',
    
    // Descriptions for new items
    glucoseMeterDesc: '여분의 배터리 포함',
    glucoseStripsDesc: '혈당 측정용 시험지',
    insulinDesc: '인슐린 주사용',
    insulinSyringesDesc: '인슐린 주입기',
    glucoseSnacksDesc: '포도당 사탕·주스 등',
    coolerBagDesc: '인슐린 변질 방지용',
    sunglassesDesc: '백내장 방지용',
    bloodPressureMonitorDesc: '여분의 배터리 포함',
    lowSaltFoodDesc: '고혈압 환자용',
    saltSnacksDesc: '저혈압 환자용',
    compressionStockingsDesc: '혈액 순환 유지용',
    communicationCardsDesc: '발달장애인 의사소통용',
    medicalAlertBraceletDesc: '장애 유형 및 특이사항 기재',
    comfortFoodDesc: '스트레스 완화 및 식사 거부 방지',
    comfortObjectDesc: '작은 인형 등',
    noiseCancellingHeadphonesDesc: '소음 차단용',
    emergencyManualDesc: '발달장애인의 행동 특성과 대처 요령 기록',
    emergencyWhistleDesc: '산 인근 거주자용',
    fireExtinguisherDesc: '산불 대비용',
    dustMaskDesc: '산사태 시 먼지 차단용',
    landslideAppDesc: '산사태 경보 알림용',
    safetyShoesDesc: '산악 지역 안전용',
    safetyHelmetDesc: '낙석 대비용',
    evacuationRopeDesc: '대피 시 안전용',
    portableLanternDesc: '야간 대피용',
    formulaDesc: '모유 수유가 불가능하거나 보충이 필요한 경우',
    babyCarrierDesc: '이동시 손이 자유롭지 않은 보호자를 위해 필요',
    familiarToyDesc: '아기에게 익숙한 소형 장난감',
    bottleSetDesc: '멸균 젖병·젖꼭지',
    diaperCreamDesc: '보습제·아기피부 특화 위생용품',
    diaperBagsDesc: '기저귀 교체용 매트 포함',
    contactLensesDesc: '여분의 렌즈',
    lensSolutionDesc: '렌즈 세정용',
    lensCaseDesc: '렌즈 보관용',
    lensTweezersDesc: '렌즈 취급용',
    glassesCleanerDesc: '안경 세정용',
    glassesCaseDesc: '안경 보관용',
    glassesStrapDesc: '안경 고정용',
    artificialTearsDesc: '눈 건조 방지용',
    handSanitizerDesc: '렌즈 착용 전 손 소독용',
    
    // Child-specific item descriptions
    pictureBookDesc: '대피할 때 읽을 수 있는 그림책',
    comicBookDesc: '대피할 때 읽을 수 있는 만화책',
    familyPhotoDesc: '가족을 생각나게 해주는 사진',
    puzzleDesc: '대피할 때 할 수 있는 퍼즐',
    toyDesc: '너의 좋아하는 장난감',
    dollDesc: '너의 좋아하는 인형이나 봉제인형',
    notebookDesc: '그림 그리거나 글 쓰는 노트',
    penDesc: '글 쓰는 펜',
    pencilDesc: '그림 그리는 연필',
    coloredPencilsDesc: '색칠할 수 있는 색연필',
    childMaskDesc: '너에게 맞는 크기의 마스크',
    childSafetyVestDesc: '대피할 때 어른들이 너를 쉽게 찾을 수 있게 해주는 조끼',
    childWhistleDesc: '도움이 필요할 때 불 수 있는 호루라기',
    childHelmetDesc: '너에게 맞는 크기의 안전 헬멧',
    favoriteSnacksDesc: '너의 좋아하는 과자',
    childToothbrushSetDesc: '양치할 수 있는 양치 세트',
    
    // Disaster-specific items
    safetyHelmetEarthquake: '안전모·헬멧',
    safetyGloves: '장갑',
    sturdyShoes: '튼튼한 신발',
    multiTool: '다용도 도구',
    dustMaskEarthquake: '먼지 마스크',
    waterproofBags: '방수 가방',
    waterproofPouch: '방수 포켓',
    rubberBoots: '고무장화',
    raincoat: '우비',
    flotationDevice: '부력 확보 물품',
    smokeMask: '방연마스크',
    portableFireExtinguisher: '소형 소화기',
    escapeRouteMap: '예비 탈출로 지도',
    sealedContainers: '단단히 밀폐되는 용기',
    reinforcementTape: '테이프·로프',
    electrolytePowder: '전해질 파우더',
    reusableWaterBottle: '재사용 가능한 물병',
    uvHat: '모자',
    breathableClothing: '통풍 잘 되는 옷',
    sunscreen: '자외선 차단제',
    portableUmbrella: '휴대용 양산',
    coolingTowel: '냉각 타월',
    portableFan: '휴대용 선풍기',
    
    // Disaster-specific descriptions
    safetyHelmetEarthquakeDesc: '낙하물·파편으로부터 머리 보호',
    safetyGlovesDesc: '낙하물·파편으로부터 손 보호',
    sturdyShoesDesc: '유리 파편·건물 잔해 위 이동용',
    multiToolDesc: '문·가구 이동 시 활용',
    dustMaskEarthquakeDesc: '붕괴 시 발생하는 먼지 흡입 방지',
    waterproofBagsDesc: '방수 가방/지퍼백',
    waterproofPouchDesc: '의약품·전자기기 보호용',
    rubberBootsDesc: '홍수 지역 이동용',
    raincoatDesc: '비로부터 보호',
    flotationDeviceDesc: '휴대용 구명조끼·튜브·로프',
    smokeMaskDesc: '연기 흡입 차단',
    portableFireExtinguisherDesc: '소화 스프레이',
    escapeRouteMapDesc: '건물 구조 확인용',
    sealedContainersDesc: '강풍·비로부터 음식 보호',
    reinforcementTapeDesc: '창문·임시 구조물 보강용',
    electrolytePowderDesc: '이온음료 분말',
    reusableWaterBottleDesc: '충분한 물 보관용',
    uvHatDesc: '접이식 모자/넓은 챙모자/UV 차단 모자',
    breathableClothingDesc: '가볍고 긴팔의 통풍 잘 되는 옷 (폴리에스터보다는 면·린넨 계열)',
    sunscreenDesc: '자외선 차단제',
    portableUmbrellaDesc: '휴대용 양산',
    coolingTowelDesc: '냉각 타월',
    portableFanDesc: '휴대용 선풍기',
  },
  
  en: {
    // App title and header
    appTitle: 'Ansim',
    appSubtitle: 'Personalized Disaster Preparedness Platform',
    copyright: '© 2024 Ansim - Personalized Disaster Preparedness Information Platform',
    
    // Steps
    step1: 'Disaster Type',
    step2: 'Personal Info',
    step3: 'Custom Info',
    disasterSelection: 'Select Disaster Type',
    personalCharacteristics: 'Enter Personal Characteristics',
    personalizedInfo: 'Personalized Information',
    
    // Disaster types
    earthquake: 'Earthquake',
    flood: 'Flood',
    fire: 'Fire',
    typhoon: 'Typhoon',
    heatwave: 'Heatwave',
    
    // Disaster descriptions
    earthquakeDesc: 'Earthquake preparedness measures',
    floodDesc: 'Flood and water damage preparedness',
    fireDesc: 'Fire and wildfire preparedness',
    typhoonDesc: 'Typhoon and strong wind preparedness',
    heatwaveDesc: 'Heatwave and high temperature preparedness',
    
    // Personal characteristics
    physicalCharacteristics: 'Physical Characteristics',
    familyPets: 'Family & Pets',
    medicalInfo: 'Medical Information',
    otherInfo: 'Other Information',
    specialCircumstances: 'Special Circumstances',
    familyCategory: 'Family',
    
    // Physical characteristics
    wearsGlasses: 'I wear glasses',
    isPregnant: 'I am pregnant',
    hasMobilityIssues: 'I have mobility difficulties',
    isElderly: 'I am 65 years or older',
    isChild: 'I am a child',
    hasHearingImpairment: 'I have hearing difficulties',
    hasVisualImpairment: 'I have visual difficulties',
    
    // Specific medical conditions
    hasDiabetes: 'I have diabetes',
    hasHypertension: 'I have hypertension',
    hasLowBloodPressure: 'I have low blood pressure',
    hasDevelopmentalDisabilities: 'I have developmental disabilities',
    
    // Special circumstances
    livesNearMountain: 'I live near mountains',
    hasInfant: 'I have an infant',
    
    // Family & pets
    hasChildren: 'I have minor children',
    hasPets: 'I have pets',
    petType: 'Pet Type',
    selectPetType: 'Please select',
    dog: 'Dog',
    cat: 'Cat',
    bird: 'Bird',
    other: 'Other',
    
    // Medical
    hasMedicalConditions: 'I have chronic conditions',
    takesMedications: 'I take medications regularly',
    medicalConditions: 'Medical Conditions (comma separated)',
    medications: 'Medications (comma separated)',
    medicalConditionsPlaceholder: 'e.g., hypertension, diabetes',
    medicationsPlaceholder: 'e.g., blood pressure medication, diabetes medication',
    
    // Other info
    hasCar: 'I own a car',
    hasEmergencyContact: 'I know emergency contacts',
    
    // Buttons
    next: 'Next',
    back: 'Back',
    generatePersonalizedInfo: 'Generate Personalized Info',
    startOver: 'Start Over',
    download: 'Download',
    print: 'Print',
    
    // Results
    goBagItems: 'Go-Bag Items',
    evacuationInstructions: 'Evacuation Instructions',
    additionalNotes: 'Additional Notes',
    priority: 'Priority',
    high: 'High',
    medium: 'Medium',
    low: 'Low',
    
    // Categories
    essential: 'Essential',
    medical: 'Medical',
    personal: 'Personal',
    pet: 'Pet',
    special: 'Special',
    disaster: 'Disaster-Specific',
    family: 'Family',
    
    // Game mode selection
    gameModeSelection: 'Game Mode Selection',
    bagPackingGame: 'Bag Packing Game',
    gameModeDescription: 'Strategically select the necessary items within limited space and weight!',
    
    // Game modes
    backpackMode: 'Backpack Mode',
    duffelMode: 'Duffel Bag Mode',
    emergencyMode: 'Emergency Mode',
    familyMode: 'Family Mode',
    childBagMode: 'Child Bag Mode',
    
    // Game mode descriptions
    backpackModeDesc: 'General Hiking Backpack (30L)',
    duffelModeDesc: 'Medium Duffel Bag (50L)',
    emergencyModeDesc: 'Small Emergency Bag (15L)',
    familyModeDesc: 'Large Family Bag (80L)',
    childBagModeDesc: 'Child Bag (20L)',
    
    // Game mode constraints
    maxWeight: 'Max Weight',
    maxVolume: 'Max Volume',
    maxItems: 'Max Items',
    items: 'items',
    
    // Buttons
    startGame: 'Start Game',
    
    // Bag packing game
    weight: 'Weight',
    volume: 'Volume',
    score: 'Score',
    scoreDescription: 'Higher priority items result in a higher score',
    availableItems: 'Available Items',
    packedItems: 'Items in Bag',
    clickToAdd: 'Click to add to bag',
    inBag: 'In bag',
    itemsCount: 'items',
    noItemsPacked: 'Click an item to put it in the bag',
    complete: 'Complete!',
    
    // Overcapacity alerts
    overcapacityAlert: 'Bag Overcapacity!',
    weightExceeded: 'Weight Exceeded',
    volumeExceeded: 'Volume Exceeded',
    itemCountExceeded: 'Item Count Exceeded',
    removeItemsToFit: 'Remove items to fit within capacity limits.',
    
    // Go-bag items
    water: 'Water (3L per person)',
    food: 'Emergency Food (3 days)',
    flashlight: 'Flashlight',
    radio: 'Radio',
    firstAid: 'First Aid Kit',
    whistle: 'Whistle',
    cash: 'Cash',
    documents: 'Important Documents',
    phoneCharger: 'Phone Charger',
    clothes: 'Extra Clothes',
    blanket: 'Blanket',
    toiletries: 'Toiletries',
    prescriptionMeds: 'Prescription Medications',
    glassesExtra: 'Extra Glasses',
    hearingAidBatteries: 'Hearing Aid Batteries',
    prenatalVitamins: 'Prenatal Vitamins',
    mobilityAid: 'Mobility Aid',
    petFood: 'Pet Food',
    petWater: 'Pet Water',
    petCarrier: 'Pet Carrier',
    petMedication: 'Pet Medication',
    babySupplies: 'Baby Supplies',
    carKeys: 'Car Keys',
    
    // Item descriptions
    waterDesc: 'Sufficient water supply for 3 days',
    foodDesc: 'Canned food, crackers, energy bars, etc.',
    flashlightDesc: 'With batteries, LED recommended',
    radioDesc: 'Hand-crank or battery powered',
    firstAidDesc: 'Bandages, disinfectant, pain relievers, etc.',
    whistleDesc: 'For rescue signals',
    cashDesc: 'Small bills and coins',
    documentsDesc: 'ID, insurance cards, bank books, etc.',
    phoneChargerDesc: 'Including power bank',
    clothesDesc: 'Clothes for 3 days',
    blanketDesc: 'Emergency blanket',
    toiletriesDesc: 'Toothbrush, towel, soap, etc.',
    prescriptionMedsDesc: '3 days of prescription medication',
    glassesExtraDesc: 'For glasses wearers',
    hearingAidBatteriesDesc: 'For hearing aid users',
    prenatalVitaminsDesc: 'For pregnant women',
    mobilityAidDesc: 'Cane, wheelchair, etc.',
    petFoodDesc: '3 days of pet food',
    petWaterDesc: 'Water for pets',
    petCarrierDesc: 'For pet transportation',
    petMedicationDesc: 'Pet prescription medication',
    babySuppliesDesc: 'Diapers, formula, bottles, etc.',
    carKeysDesc: 'For car owners',
    
    // Evacuation instructions
    stayCalm: 'Stay Calm',
    followOfficials: 'Follow Official Instructions',
    avoidElevators: 'Avoid Elevators',
    useStairs: 'Use Stairs',
    helpOthers: 'Help Others',
    mobilityAssistance: 'Use Mobility Aid',
    pregnantEvacuation: 'Special Care for Pregnant Women',
    childrenSafety: 'Ensure Children\'s Safety',
    childEvacuation: 'Child Evacuation Guide',
    petEvacuation: 'Pet Evacuation',
    hearingImpaired: 'For Hearing Impaired',
    visualImpaired: 'For Visually Impaired',
    
    // Instruction descriptions
    stayCalmDesc: 'Don\'t panic, assess the situation around you, then move to a safe place.',
    followOfficialsDesc: 'Follow instructions from official agencies like fire stations, police stations, and district offices.',
    avoidElevatorsDesc: 'Do not use elevators during earthquakes or fires.',
    useStairsDesc: 'Move using safe stairs.',
    helpOthersDesc: 'Help people around you when it\'s safe to do so.',
    mobilityAssistanceDesc: 'Use mobility aids to move safely if you have difficulty walking.',
    pregnantEvacuationDesc: 'Don\'t overexert yourself, move slowly, and protect your abdomen.',
    childrenSafetyDesc: 'Hold your child\'s hand and move together, making sure they don\'t get left alone.',
    childEvacuationDesc: 'Stay with adults and make sure you don\'t get separated. Blow your whistle if you need help.',
    petEvacuationDesc: 'Put your pet in a carrier and evacuate together.',
    hearingImpairedDesc: 'Pay attention to visual signals and ask people around you for help.',
    visualImpairedDesc: 'Use a guide dog or cane and ask people around you for help.',
    
    // Additional notes
    elderlyNote: 'Since you are elderly, don\'t overexert yourself and act slowly.',
    childNote: 'Since you are a child, stay with adults and make sure you don\'t get separated from them.',
    medicalConditionsNote: 'Inform medical personnel about the following conditions:',
    emergencyContactNote: 'Remember emergency contacts or save them in your phone.',
    
    // Disaster-specific notes
    earthquakeNote: 'During an earthquake, get under a desk or move to a door frame.',
    floodNote: 'During floods, evacuate to higher ground and avoid driving.',
    fireNote: 'During fires, move in a low position and check door handle temperature before opening.',
    typhoonNote: 'During typhoons, stay away from windows and avoid going outside.',
    heatwaveNote: 'During heatwaves, drink plenty of water and rest in the shade.',
    
    // UI text
    selectDisaster: 'What type of disaster preparedness information do you need?',
    selectDisasterDesc: 'We provide disaster preparedness information tailored to your personal characteristics.',
    personalizedFor: 'Preparedness Information',
    generatedOn: 'Generated on',
    selectLanguage: 'Select Language',
    
    // New detailed medical items
    glucoseMeter: 'Glucose Meter',
    glucoseStrips: 'Glucose Test Strips',
    insulin: 'Insulin',
    insulinSyringes: 'Insulin Syringes',
    glucoseSnacks: 'Glucose Snacks',
    coolerBag: 'Cooler Bag',
    sunglasses: 'Sunglasses',
    bloodPressureMonitor: 'Blood Pressure Monitor',
    lowSaltFood: 'Low Salt Food',
    saltSnacks: 'Salt Snacks',
    compressionStockings: 'Compression Stockings',
    communicationCards: 'Communication Cards',
    medicalAlertBracelet: 'Medical Alert Bracelet',
    comfortFood: 'Comfort Food',
    comfortObject: 'Comfort Object',
    noiseCancellingHeadphones: 'Noise Cancelling Headphones',
    emergencyManual: 'Emergency Manual',
    emergencyWhistle: 'Emergency Whistle',
    fireExtinguisher: 'Fire Extinguisher',
    dustMask: 'Dust Mask',
    landslideApp: 'Landslide Alert App',
    safetyShoes: 'Safety Shoes',
    safetyHelmet: 'Safety Helmet',
    evacuationRope: 'Evacuation Rope',
    portableLantern: 'Portable Lantern',
    formula: 'Baby Formula',
    babyCarrier: 'Baby Carrier',
    familiarToy: 'Familiar Toy',
    bottleSet: 'Bottle Set',
    diaperCream: 'Diaper Cream',
    diaperBags: 'Diaper Bags',
    contactLenses: 'Contact Lenses',
    lensSolution: 'Lens Solution',
    lensCase: 'Lens Case',
    lensTweezers: 'Lens Tweezers',
    glassesCleaner: 'Glasses Cleaner',
    glassesCase: 'Glasses Case',
    glassesStrap: 'Glasses Strap',
    artificialTears: 'Artificial Tears',
    handSanitizer: 'Hand Sanitizer',
    
    // Child-specific items
    pictureBook: 'Picture Book',
    comicBook: 'Comic Book',
    familyPhoto: 'Family Photo',
    puzzle: 'Puzzle',
    toy: 'Toy',
    doll: 'Doll (or Soft Toy)',
    notebook: 'Notebook',
    pen: 'Pen',
    pencil: 'Pencil',
    coloredPencils: 'Colored Pencils',
    childMask: 'Child-Sized Mask',
    childSafetyVest: 'Child Safety Vest',
    childWhistle: 'Whistle',
    childHelmet: 'Child Helmet',
    favoriteSnacks: 'Favorite Snacks',
    childToothbrushSet: 'Children\'s Toothbrush Set',
    
    // Descriptions for new items
    glucoseMeterDesc: 'With extra batteries',
    glucoseStripsDesc: 'For blood glucose testing',
    insulinDesc: 'For insulin injection',
    insulinSyringesDesc: 'Insulin injection devices',
    glucoseSnacksDesc: 'Glucose candy, juice, etc.',
    coolerBagDesc: 'To prevent insulin spoilage',
    sunglassesDesc: 'To prevent cataracts',
    bloodPressureMonitorDesc: 'With extra batteries',
    lowSaltFoodDesc: 'For hypertension patients',
    saltSnacksDesc: 'For low blood pressure patients',
    compressionStockingsDesc: 'To maintain blood circulation',
    communicationCardsDesc: 'For developmental disabilities communication',
    medicalAlertBraceletDesc: 'With disability type and special notes',
    comfortFoodDesc: 'To reduce stress and prevent food refusal',
    comfortObjectDesc: 'Small stuffed animals, etc.',
    noiseCancellingHeadphonesDesc: 'For noise reduction',
    emergencyManualDesc: 'Behavioral characteristics and coping strategies for developmental disabilities',
    emergencyWhistleDesc: 'For mountain area residents',
    fireExtinguisherDesc: 'For wildfire prevention',
    dustMaskDesc: 'For dust protection during landslides',
    landslideAppDesc: 'For landslide alert notifications',
    safetyShoesDesc: 'For mountain area safety',
    safetyHelmetDesc: 'For falling rock protection',
    evacuationRopeDesc: 'For safe evacuation',
    portableLanternDesc: 'For night evacuation',
    formulaDesc: 'When breastfeeding is not possible or needs supplementation',
    babyCarrierDesc: 'Needed when caregiver\'s hands are not free during movement',
    familiarToyDesc: 'Small toy familiar to the baby',
    bottleSetDesc: 'Sterilized bottles and nipples',
    diaperCreamDesc: 'Moisturizer and baby skin-specific hygiene products',
    diaperBagsDesc: 'Including diaper changing mat',
    contactLensesDesc: 'Extra contact lenses',
    lensSolutionDesc: 'For lens cleaning',
    lensCaseDesc: 'For lens storage',
    lensTweezersDesc: 'For lens handling',
    glassesCleanerDesc: 'For glasses cleaning',
    glassesCaseDesc: 'For glasses storage',
    glassesStrapDesc: 'For glasses retention',
    artificialTearsDesc: 'To prevent dry eyes',
    handSanitizerDesc: 'For hand sanitization before lens insertion',
    
    // Child-specific item descriptions
    pictureBookDesc: 'A book you can read during evacuation',
    comicBookDesc: 'A comic book you can read during evacuation',
    familyPhotoDesc: 'A photo that reminds you of your family',
    puzzleDesc: 'A puzzle you can do during evacuation',
    toyDesc: 'Your favorite toy',
    dollDesc: 'Your favorite doll or soft toy',
    notebookDesc: 'A notebook for drawing or writing',
    penDesc: 'A pen for writing',
    pencilDesc: 'A pencil for drawing',
    coloredPencilsDesc: 'Colored pencils for coloring',
    childMaskDesc: 'A mask that fits you',
    childSafetyVestDesc: 'A vest that helps adults find you easily during evacuation',
    childWhistleDesc: 'A whistle you can blow when you need help',
    childHelmetDesc: 'A safety helmet that fits you',
    favoriteSnacksDesc: 'Your favorite snacks',
    childToothbrushSetDesc: 'A toothbrush set for brushing your teeth',
    
    // Disaster-specific items
    safetyHelmetEarthquake: 'Safety Helmet',
    safetyGloves: 'Safety Gloves',
    sturdyShoes: 'Sturdy Shoes',
    multiTool: 'Multi-Tool',
    dustMaskEarthquake: 'Dust Mask',
    waterproofBags: 'Waterproof Bags',
    waterproofPouch: 'Waterproof Pouch',
    rubberBoots: 'Rubber Boots',
    raincoat: 'Raincoat',
    flotationDevice: 'Flotation Device',
    smokeMask: 'Smoke Mask',
    portableFireExtinguisher: 'Portable Fire Extinguisher',
    escapeRouteMap: 'Escape Route Map',
    sealedContainers: 'Sealed Containers',
    reinforcementTape: 'Reinforcement Tape',
    electrolytePowder: 'Electrolyte Powder',
    reusableWaterBottle: 'Reusable Water Bottle',
    uvHat: 'UV Hat',
    breathableClothing: 'Breathable Clothing',
    sunscreen: 'Sunscreen',
    portableUmbrella: 'Portable Umbrella',
    coolingTowel: 'Cooling Towel',
    portableFan: 'Portable Fan',
    
    // Disaster-specific descriptions
    safetyHelmetEarthquakeDesc: 'Protection from falling objects and debris',
    safetyGlovesDesc: 'Protection from falling objects and debris',
    sturdyShoesDesc: 'For walking on glass fragments and building debris',
    multiToolDesc: 'For moving doors and furniture',
    dustMaskEarthquakeDesc: 'Prevents inhalation of dust from collapse',
    waterproofBagsDesc: 'Waterproof bags and ziplock bags',
    waterproofPouchDesc: 'Protects medicines and electronic devices',
    rubberBootsDesc: 'For moving through flooded areas',
    raincoatDesc: 'Protection from rain',
    flotationDeviceDesc: 'Portable life jacket, tube, rope',
    smokeMaskDesc: 'Blocks smoke inhalation',
    portableFireExtinguisherDesc: 'Fire suppression spray',
    escapeRouteMapDesc: 'For building structure confirmation',
    sealedContainersDesc: 'Protects food from strong winds and rain',
    reinforcementTapeDesc: 'For reinforcing windows and temporary structures',
    electrolytePowderDesc: 'Ion drink powder',
    reusableWaterBottleDesc: 'For storing sufficient water',
    uvHatDesc: 'Foldable hat/wide-brimmed hat/UV protection hat',
    breathableClothingDesc: 'Light, long-sleeved, breathable clothing (cotton/linen rather than polyester)',
    sunscreenDesc: 'UV protection',
    portableUmbrellaDesc: 'Portable umbrella',
    coolingTowelDesc: 'Cooling towel',
    portableFanDesc: 'Portable fan',
  }
};
