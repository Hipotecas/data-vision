export interface Types {
  code: number
  message: string
  data: IOTData
}

export interface IOTData {
  onlineEquipment: Record<string, number>
  todayReport: TodayReport
  factoryReports: FactoryReport[]
  todayProduct: Record<string, number>
  totalProduct: Record<string, number>
  totalActivate: Record<string, number>
  monthProduct: { [key: string]: MonthProduct }
  monthActivate: null
  activateCountry: number
  activateProvince: number
}

export interface FactoryReport {
  factoryName: string
  totalActivate: null
  todayActivate: number
  todayOnline: number
  totalProduct: number
  todayProduct: null
}

export interface MonthProduct {
  total: number
  region: Region[]
}

export interface Region {
  name: string
  product: number
}

export interface OnlineEquipment {
  美国: number
  泰国: number
  中国: number
}

export interface TodayProduct {
  东南亚: number
  欧洲: number
  中国: number
  北美: number
}

export interface TodayReport {
  'US_EU': CN
  'CN': CN
  'SG': CN
}

export interface CN {
  orderIncome: number
  adIncome: number
  activeUser: number
  activateEquipment: number
  orderCount: number
  adECPM: number
  activeEquipment: number
}

export interface Sg {
  orderIncome: number
  activeUser: number
  activateEquipment: number
  orderCount: number
  activeEquipment: number
}
