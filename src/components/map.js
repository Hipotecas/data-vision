import iot from './iot.json'

export default {
  textStyle: {
    fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
  },
  title: {
    left: 'center',
    top: 5,
    itemGap: 0,
    textStyle: {
      color: '#eee',
    },
    z: 200,
  },
  tooltip: {
    trigger: 'item',
    show: false,
  },
  legend: { show: false },
  geo: {
    map: 'world',
    emphasis: {
      label: {
        show: false,
      },
      itemStyle: {
        areaColor: '#2a333d',
      },
    },
    itemStyle: {
      areaColor: '#323c48',
      borderColor: '#111',
    },
  },
  series: [
    {
      name: 'Prices and Earnings 2012',
      type: 'scatter',
      // symbol: "rect",
      coordinateSystem: 'geo',
      data: iot,
      activeOpacity: 1,
      label: {
        formatter: '{b}',
        position: 'right',
        show: false,
      },
      symbolSize: 1,
      // symbolSize: function (data) {
      //     return Math.max(5, data[2] / 5);
      // },
      itemStyle: {
        borderColor: '#fff',
        color: '#577ceb',
      },
      emphasis: {
        label: {
          show: false,
        },
      },
    },
  ],
}
