var colors = ["#1FD1A4", "#DC3924", "#666666"]

var options = {
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
      ['Saldo']
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

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();