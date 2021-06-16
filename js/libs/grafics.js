$('select').styler();


var options = {
    series: [{
    name: 'Завершено',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Забронировано',
    data: [11, 32, 45, 32, 34, 52, 41]
  }, {
    name: 'Арендовано',
    data: [11, 15, 42, 102, 2, 102, 41]
  }, {
    name: 'Отменено',
    data: [1, 32, 22, 12, 34, 125, 1]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#797EF6', '#FA9600', '#4ADEDE', '#FA0026'],
    dataLabels: {
      enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };

  var options2 = {
    series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }, {
    name: 'series3',
    data: [11, 15, 42, 102, 2, 102, 41]
  }, {
    name: 'series4',
    data: [1, 32, 22, 12, 34, 125, 1]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#797EF6', '#FA9600', '#4ADEDE', '#FA0026'],
    dataLabels: {
      enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };

  var options3 = {
    series: [{
    name: 'Добавлено',
    data: [143, 143, 33, 33, 33, 23, 23]
  }, {
    name: 'Удалено',
    data: [23, 23, 33, 33, 143, 143, 143]
  },],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#4ADEDE', '#FA0026'],
    dataLabels: {
      enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };


  var optionsv2z1 = {
    series: [{
    name: 'Активных',
    data: [44, 55, 41, 67, 22, 43]
  }, {
    name: 'Неактивных',
    data: [21, 7, 25, 13, 22, 8]
  }],
    chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  colors: ['#7badff', '#ff6b6b'],
    dataLabels: {
      enabled: false
  },
  fill: {
    colors: ['#7b2137', '#7b2137'],
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 100],
      colorStops: [
        {
          offset: 0,
          color: "#7b2137",
          opacity: 1
        },
        {
          offset: 20,
          color: "#7b2137",
          opacity: 1
        },
        {
          offset: 60,
          color: "#7b2137",
          opacity: 1
        },
        {
          offset: 100,
          color: "#7b2137",
          opacity: 1
        }
      ]
    }
  },
  xaxis: {
    type: 'datetime',
    categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
      '01/05/2011 GMT', '01/06/2011 GMT'
    ],
  },
  legend: {
    position: 'right',
    offsetY: 40
  },
  fill: {
    opacity: 1
  }
  };


  var optionsv2z2 = {
    series: [{
    name: 'Юр',
    data: [44, 55, 41, 67, 22, 43]
  }, {
    name: 'Физ',
    data: [21, 7, 25, 13, 22, 8]
  }],
    chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  colors: ['#7badff', '#ff6b6b'],
    dataLabels: {
      enabled: false
  },
  fill: {
    colors: ['#7b2137', '#7b2137'],
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 100],
      colorStops: [
        {
          offset: 0,
          color: "#7b2137",
          opacity: 1
        },
        {
          offset: 20,
          color: "#7b2137",
          opacity: 1
        },
        {
          offset: 60,
          color: "#7b2137",
          opacity: 1
        },
        {
          offset: 100,
          color: "#7b2137",
          opacity: 1
        }
      ]
    }
  },
  xaxis: {
    type: 'datetime',
    categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
      '01/05/2011 GMT', '01/06/2011 GMT'
    ],
  },
  legend: {
    position: 'right',
    offsetY: 40
  },
  fill: {
    opacity: 1
  }
  };


  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
  chart2.render();

  var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
  chart3.render();

  var chartv2z1 = new ApexCharts(document.querySelector("#chartv2z1"), optionsv2z1);
  chartv2z1.render();

  var chartv2z2 = new ApexCharts(document.querySelector("#chartv2z2"), optionsv2z2);
  chartv2z2.render();

  $('SvgjsPath1254').addClass('testcs');