var colors = ["#1FD1A4", "#DC3924", "#666666"]
var options = {
  series: [{
  // name: 'Receita',
  // data: [70],
  // },
  // {
  //   name: 'Despesa',
  //   data: [50]
  // },
  // {
  //   name: 'Saldo',
  //   data: [20]
  data: [70, 20, 30]
  }],
  chart: {
  type: 'bar',
  height: 400
  },
  colors: ["#1FD1A4", "#DC3924", "#666666"],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Receita', 'Despesa', 'Saldo'],
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
  }
  };

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// fill: {
//   colors: ['#F44336', '#E91E63', '#9C27B0']
// }
