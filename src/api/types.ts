export interface Types {
  countryTop: CountryTop[]
  factoryDate_Month: string[]
  cloudCamRegion: CloudCamRegion[]
  eu_newCam30Iot: number[]
  cn_newCam30Iot: number[]
  factoryEquipmentNum: number[]
  activeCam: number
  newCamRegion: NewCamRegion[]
  activeCountry: number
  factoryData: FactoryDataList[]
  factoryDate: string[]
  us_newCam30Iot: number[]
  event: number
  allActiveCam: number
  sg_newCam30Iot: number[]
  factoryEquipmentNum_Month: number[]
  factoryEquipmentNum_Week: number[]
  activeCamRegion: ActiveCamRegion[]
  activeCity: number
  aliveVideo: number[]
  newCam: number
  allActiveCamRegion: AllActiveCamRegion[]
  factoryEquipmentNumRank: Array<FactoryEquipmentNumRank[]>
  cloudCam: number
  cloudSave: number
  cloudSaveToday: string
  factoryDate_Week: string[]
  newCam30Iot: number[]
  factoryEquipmentNumRank_week: Array<FactoryEquipmentNumRank[]>
  factoryEquipmentNumRank_month: Array<FactoryEquipmentNumRank[]>
}

export interface ActiveCamRegion {
  onlineNum: number
  onlineRegion: string
}

export interface AllActiveCamRegion {
  totalRegion: string
  totalNum: number
}

export interface CloudCamRegion {
  region: string
  cloudNum: number
}

export interface CountryTop {
  country: string
  onlineDevice: number
}

export interface FactoryDataList {
  totalActivity: number
  name: null | string
  totalFactory: number
  todayFactory: number
  todayActive: number
  todayActivity: number
}

export interface FactoryEquipmentNumRank {
  factoryNum: number
  factoryName: null | string
}

export interface NewCamRegion {
  todayRegion: string
  todayNum: number
}
