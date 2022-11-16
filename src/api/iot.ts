import type { Types } from './types'
import type { YiTypes } from './yi-types'
import http from '.'

export function fetchIot(): Promise<Types> {
  return http.get('/bigscreen/getdata/iot')
}

export function fetchYi(): Promise<YiTypes> {
  return http.get('/bigscreen/getdata/yihome')
}
