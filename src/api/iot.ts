import type { Types } from './types'
import http from '.'

export function fetchIot(): Promise<Types> {
  return http.get('/bigscreen/getdata/iot')
}
