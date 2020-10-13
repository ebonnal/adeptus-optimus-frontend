var weaponAName = "Bolt Rifle"
var weaponBName = "SAG"

var xValues = ['A', 'B', 'C', 'D', 'E'];

var yValues = ['W', 'X', 'Y', 'Z'];

var zValues = [
  [0.00, 0.00, 0.75, 0.75, 0.00],
  [0.00, 0.00, 0.75, 0.75, 0.00],
  [0.75, 0.75, 0.75, 0.75, 0.75],
  [0.00, 0.00, 0.00, 0.75, 0.00]
];

function plot(weaponAName, weaponBName, xValues, yValues, zValues) {
    var colorscaleValue = [
      [0, '#7dae3e'],  // buttons bg green
      [1, '#0d407f']  // ultramarine blue
    ];

    var data = [{
      x: xValues,
      y: yValues,
      z: zValues,
      type: 'heatmap',
      colorscale: colorscaleValue,
      showscale: false
    }];

    var layout = {
      title: weaponAName + " vs " + weaponBName + ":\nAverage number of figurines destroyed by each weapon, divided by respective costs.",
      annotations: [],
      xaxis: {
        ticks: '',
        side: 'bottom',
        title: "Target's save"
      },
      yaxis: {
        ticks: '',
        ticksuffix: ' ',
        width: 700,
        height: 700,
        autosize: false,
        title: "Target's toughness"
      }
    };

    for ( var i = 0; i < yValues.length; i++ ) {
      for ( var j = 0; j < xValues.length; j++ ) {
        var currentValue = zValues[i][j];
        if (currentValue != 0.0) {
          var textColor = 'white';
        }else{
          var textColor = 'white';
        }
        var result = {
          xref: 'x1',
          yref: 'y1',
          x: xValues[j],
          y: yValues[i],
          text: zValues[i][j],
          font: {
            family: 'Arial',
            size: 12,
            color: 'rgb(50, 171, 96)'
          },
          showarrow: false,
          font: {
            color: textColor
          }
        };
        layout.annotations.push(result);
      }
    }
    Plotly.newPlot('chart', data, layout);
}

plot(weaponAName, weaponBName, xValues, yValues, zValues)
