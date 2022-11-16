export interface YiTypes {
  sg_newCam30: number[]
  cloudCamRegion: CloudCamRegion[]
  eu_newCam30: number[]
  cn_newCam30: number[]
  activeCam: number
  newCamRegion: NewCamRegion[]
  event: number
  newCam30Kami: number[]
  countryTop: CountryTop[]
  us_newCam30: number[]
  activeCountry: number
  allActiveCam: number
  us_newCam30Kami: number[]
  activeCamRegion: ActiveCamRegion[]
  activeCity: number
  eu_newCam30Kami: number[]
  aliveVideo: number[]
  newCam: number
  sg_newCam30Kami: number[]
  cloudCam: number
  cloudSave: number
  cloudSaveToday: string
  cn_newCam30Kami: number[]
  newCam30: number[]
  allActiveCamRegion: AllActiveCamRegion[]
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

export interface NewCamRegion {
  todayRegion: string
  todayNum: number
}
