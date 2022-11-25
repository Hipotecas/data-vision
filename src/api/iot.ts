import http from '.'
import type { Monitor } from './monitor'
import type { Types } from './types'

export function fetchYi(): Promise<Types> {
  return http.get('/bi/yihome')
}

export function queryIot(): Promise<Types> {
  return http.get('/bi/iot')
}

export function queryDashboard(): Promise<Monitor> {
  return http.get('/bi/monitor')
}

export function getDashboard(params: Record<string, any> = {}) {
  return http.get('/bi/query', { params })
}
