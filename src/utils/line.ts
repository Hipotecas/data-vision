import type { DashboardData } from '~/api/monitor';
import type { CN, Data } from '~/api/types';

export const defaultLine: Data = {
  onlineEquipment: [],
  todayReport: { cn: {} as CN, sg: {} as CN, us: {} as CN },
  factoryReports: [],
  todayProduct: 0,
  totalProduct: 0,
  totalActivate: 0,
  monthProduct: {
    data: [],
    date: [],
    extras: [],
  },
  monthActivate: {
    data: [],
    date: [],
    extras: [],
  },
  activateCountry: 0,
  activateProvince: 0,
  yearActivate: {
    data: [],
    date: [],
    extras: [],
  },
}
export const defaultDashboard = {
  renewalOrder: {
    chargeOrder: {},
    successIncome: {},
    successOrder: {},
    successRate: {},
  },
  createOnetime: {
    chargeOrder: {},
    successIncome: {},
    successOrder: {},
    successRate: {},
  },
  createRenewal: {
    chargeOrder: {},
    successIncome: {},
    successOrder: {},
    successRate: {},
  },
  adLoad: {},
  adShow: {},
  adClick: {},
} as DashboardData
export const getLineOption = (legend: any[], axis: any[], series: any[]) => {
  return {
    title: {
      text: '',
    },
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '8%',
      containLabel: true,
    },
    legend: {
      data: legend,
      bottom: 0,
      textStyle: {
        color: 'white',
      },
    },
    xAxis: {
      type: 'category',
      boundarygap: false,
      data: axis,
    },
    yAxis: { type: 'value' },
    series,
  }
}
