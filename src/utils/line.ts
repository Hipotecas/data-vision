import type { IOTData } from '~/api/types';

export const defaultLine = {
  onlineEquipment: {},
  todayReport: {},
  factoryReports: [],
  todayProduct: {},
  totalProduct: {},
  totalActivate: {},
  monthProduct: {
    active: [],
    date: [],
    extras: [],
  },
  monthActivate: {
    active: [],
    date: [],
    extras: [],
  },
  activateCountry: 0,
  activateProvince: 0,
} as unknown as IOTData

export const defaultYiLine = {
  sg_newCam30: [],
  cloudCamRegion: [],
  eu_newCam30: [],
  cn_newCam30: [],
  activeCam: 0,
  newCamRegion: [],
  event: 0,
  newCam30Kami: [],
  countryTop: [],
  us_newCam30: [],
  activeCountry: 0,
  allActiveCam: 0,
  us_newCam30Kami: [],
  activeCamRegion: [],
  activeCity: 0,
  eu_newCam30Kami: [],
  aliveVideo: [],
  newCam: 0,
  sg_newCam30Kami: [],
  cloudCam: 0,
  cloudSave: 0,
  cloudSaveToday: '',
  cn_newCam30Kami: [],
  newCam30: [],
  allActiveCamRegion: [],
}

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
