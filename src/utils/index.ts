import * as echarts from 'echarts'
export const getLine = (title: string | undefined, xAxisData: any[], seriesData: any[]) => {
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
    },
    grid: {
      top: '10%',
      left: '5px',
      right: '20px',
      bottom: '0%',
      containLabel: true,
    },
    toolbox: {
      show: false,
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
        // data : this.sevenDayDataToX,
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
        smooth: true,
        stack: 'Kami总量',
        dataTypeString: 1,
        label: {
          normal: {
            show: false,
            position: 'top',
          },
        },
        // showSymbol:false,
        lineStyle: {
          color: 'rgba(64, 98, 235,0.8)',
          width: '0',
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
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
        data: seriesData,
      },
    ],
  }
}
