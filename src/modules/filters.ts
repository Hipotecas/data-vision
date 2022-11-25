import { type UserModule } from '~/types'
import { formatNumber } from '~/utils/format'

export const install: UserModule = ({ app }) => {
  app.config.globalProperties.$filters = {
    number: formatNumber,
  }
}
