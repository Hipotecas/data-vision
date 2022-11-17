import http from '.'
import type { Types } from './types'

export function fetchYi(): Promise<Types> {
  return http.get('/bi/yihome')
}

export function queryIot(): Promise<Types> {
  return http.get('/bi/iot')
}
