var colors = ["#1FD1A4", "#DC3924", "#666666"]

var options = {
  series: [{
    name: "Receita",
    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
  },
  {
    name: "Despesa",
    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
  },
  {
    name: 'Saldo',
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

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();