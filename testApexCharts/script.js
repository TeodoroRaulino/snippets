var colors = ["#1FD1A4", "#DC3924", "#666666"]

var chartBar = {
  series: [{
  name: 'Valores',
  data: [70, 20, 30]
  }],
  chart: {
  type: 'bar',
  height: 500,
  },
  colors: colors,
  plotOptions: {
    bar: {
      columnWidth: '45%',
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: [
      ['Receita'], 
      ['Despesa'], 
      ['Caixa']
    ]
  },
  yaxis: {
    title: {
      text: 'R$ (Valor)'
    }
  },
  grid: {
    show: true,
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "R$ " + val
      }
    }
  }, 
};

var chartLine = {
  series: [{
    name: "Receita",
    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
  },
  {
    name: "Despesa",
    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
  },
  {
    name: 'Caixa',
    data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
  }
],
  chart: {
  height: 500,
  type: 'line',
  zoom: {
    enabled: false
  },
},
dataLabels: {
  enabled: false
},
axisTicks: {
  show: false,
},
colors: colors,
legend: {
  tooltipHoverFormatter: function(val, opts) {
    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
  }
},
markers: {
  size: 0,
  hover: {
    sizeOffset: 6
  }
},
xaxis: {
  categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'
  ],
},
yaxis: {
  title: {
    text: 'R$ (Valor)'
  }
},
tooltip: {
  y: [
    {
      title: {
        formatter: function (val) {
          return val
        }
      }
    },
    {
      title: {
        formatter: function (val) {
          return val
        }
      }
    },
    {
      title: {
        formatter: function (val) {
          return val;
        }
      }
    }
  ]
},
grid: {
  borderColor: '#f1f1f1',
}
};

let chart = new ApexCharts(document.querySelector("#chart"), chartBar);
chart.render();

function changeChart(chartType){
  chart.destroy();

  if(chartType.value === 'line'){
    chart = new ApexCharts(document.querySelector("#chart"), chartLine);
    chart.render();
  }
  if(chartType.value === 'bar'){
    chart = new ApexCharts(document.querySelector("#chart"), chartBar);
    chart.render();
  }
}