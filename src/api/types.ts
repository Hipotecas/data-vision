export interface Types {
  code: number
  message: string
  data: Data
}

export interface Data {
  onlineEquipment: OnlineEquipment[]
  todayReport: TodayReport
  factoryReports: FactoryReport[]
  todayProduct: number
  totalProduct: number
  totalActivate: number
  monthProduct: MonthActivate
  monthActivate: MonthActivate
  yearActivate: MonthActivate
  activateCountry: number
  activateProvince: number
}

export interface FactoryReport {
  factoryName: string
  totalActivate: number
  todayActivate: number
  lastSevenDayActivate: number
  lastThirtyDayActivate: number
  online: number
  totalProduct: number
  todayProduct: number
  lastSevenDayProduct: number
  lastThirtyProduct: number
}

export interface MonthActivate {
  date: string[]
  data: number[]
  extras: any[]
}

export interface OnlineEquipment {
  country: string
  cnt: number
}

export interface TodayReport {
  cn: CN
  us: CN
  sg: CN
}

export interface CN {
  activeEquipment: number
  activeUser: number
  activateEquipment: number
  orderCount: number
  orderIncome: number
  adIncome: number
  adECPM: number
}

export interface TotalActivate {
  EU: number
  SG: number
  CN: number
  US: number
}
