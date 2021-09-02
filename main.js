var speedCanvas = document.getElementById("speedChart");

var dataFirst = {
    label: "Javascript",
    data: [1, 1, 1, 1, 1, 1, 1],
    lineTension: 0,
    fill: false,
    borderColor: 'red'
    
  };

var dataSecond = {
    label: "Python",
    data: [4, 3, 3, 3, 3, 3, 2],
    lineTension: 0,
    fill: false,
  borderColor: 'blue'
  };
  
  var dataThird = {
    label: "Java",
    data: [2, 2, 2, 2, 2, 3, 3],
    lineTension: 0,
    fill: false,
  borderColor: 'pink'
  };

  var dataForth = {
    label: "Typescript",
    data: [10, 9, 8, 7, 7, 5, 5],
    lineTension: 0,
    fill: false,
  borderColor: 'darkgrey'
  };

  var dataFifth = {
    label: "C#",
    data: [8, 7, 5, 6, 6, 5, 5],
    lineTension: 0,
    fill: false,
  borderColor: 'blue'
  };

  var dataSixth = {
    label: "PHP",
    data: [3, 4, 4, 4, 4, 5, 6],
    lineTension: 0,
    fill: false,
  borderColor: 'grey'
  };

  var dataSixth = {
    label: "PHP",
    data: [6, 5, 5, 5, 5, 5, 7],
    lineTension: 0,
    fill: false,
  borderColor: 'darkblue'
  };






var speedData = {
  labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020"],
  datasets: [dataFirst, dataSecond, dataThird, dataForth, dataFifth, dataSixth]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 40,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});

// const DATA_COUNT = 5;
// const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

// const data = {
//   labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: Utils.numbers(NUMBER_CFG),
//       backgroundColor: Object.values(Utils.CHART_COLORS),
//     }
//   ]
// };


let data = document.getElementById('piechart').getContext('2d')


let dataforchart = {
  labels: [
    'React',
    'Angular',
    'Vue.js'
  ],
  datasets: [{
    label: 'The most popular',
    data: [57.5, 31.5, 11],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};
let pieChart = new Chart(data,{
  type: 'pie',
    data: dataforchart,
  });

  




