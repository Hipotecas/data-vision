export interface Monitor {
  code: number
  message: string
  data: DashboardData
}

export interface DashboardData {
  renewalOrder: CreateOnetime
  createOnetime: CreateOnetime
  createRenewal: CreateOnetime
  adLoad: Ad
  adShow: Ad
  adClick: Ad
}

export interface Ad {
  date: string[]
  data: Datum[]
}

export interface Datum {
  key: string
  data: number[]
}

export interface CreateOnetime {
  chargeOrder: ChargeOrder
  successOrder: ChargeOrder
  successIncome: ChargeOrder
  successRate: SuccessRate
}

export interface ChargeOrder {
  todayTotal: number
  todayAli: number
  todayWx: number
  todayApple: number
  yesterdayTotal: number
  yesterdayAli: number
  yesterdayWx: number
  yesterdayApple: number
  increaseRate: string
}

export interface SuccessRate {
  todayTotal: string
  todayAli: string
  todayWx: string
  todayApple: string
  yesterdayTotal: string
  yesterdayAli: string
  yesterdayWx: string
  yesterdayApple: string
  increaseRate: string
}
