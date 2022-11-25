import LinearGradient from 'zrender/src/graphic/LinearGradient'
export const getLine = (title: string | undefined, xAxisData: any[] = [], seriesData: any[] = [], list: any[] = []) => {
  return {
    title: {
      text: '',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: 'rgba(64, 98, 235,0.7)',
        },
      },
      formatter(data: any) {
        if (list && list.length) {
          const item = data[0]
          const index = Math.min(item.dataIndex, list.length - 1)
          const current = list[index]

          let str = ''
          for (const [key, value] of (current))
            str += `<div>${key}: ${value}</div>`

          return `${item.seriesName}</br>总生产数量: ${item.value} </br> ${str}`
        }
      },
    },
    grid: {
      top: '10%',
      left: '5px',
      right: '20px',
      bottom: '0%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        nameLocation: 'start',
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(59,67,115,0.5)',
          },
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(59,67,115,0.5)',
          },
        },
        axisLabel: {
          color: '#a0a8d6',
        },
        axisPointer: {
          type: 'line',
          color: '#f00',
        },
        data: xAxisData,
      },
    ],
    yAxis: [
      {
        type: 'value',
        splitLine: {
          show: false,
        },
        axisLabel: {
          color: '#a0a8d6',
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(59,67,115,0.5)',
          },
        },
      },
    ],
    series: [
      {
        name: title,
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        areaStyle: {
          color: new LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(64, 98, 235,0.8)',
            },
            {
              offset: 1,
              color: 'rgba(255, 255, 255,0)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: seriesData,
      },
    ],
  }
}

