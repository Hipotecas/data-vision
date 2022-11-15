import { throttle } from 'echarts/core'
import type { ResizeCallback } from 'resize-detector'
import { addListener, removeListener } from 'resize-detector'
import type { Ref } from 'vue-demi'
import { watch } from 'vue-demi'
import type { EChartsType } from '~/components/types'

export function useAutoresize(
  chart: Ref<EChartsType | undefined>,
  autoresize: Ref<boolean>,
  root: Ref<HTMLElement | undefined>,
): void {
  let resizeListener: ResizeCallback | null = null

  watch([root, chart, autoresize], ([root, chart, autoresize], _, cleanup) => {
    if (root && chart && autoresize) {
      resizeListener = throttle(() => {
        chart.resize()
      }, 100)

      addListener(root, resizeListener)
    }

    cleanup(() => {
      if (resizeListener && root)
        removeListener(root, resizeListener)
    })
  })
}

export const autoresizeProps = {
  autoresize: Boolean,
}
