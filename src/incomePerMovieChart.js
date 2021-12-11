randomData = [{date: 2011, money: 300000},{date: 2012, money: 15000000},{date: 2018, money: 2111548},{date: 2021, money: 1342000}];

incomeChart = LineChart(randomData,
    {
        x: d => d.date,
        y: d => d.money,
        yLabel: "Gross Income",
        width: 500,
        height: 400,
        color: "steelblue",
    });

    document.getElementById('income-movies').appendChild(incomeChart);