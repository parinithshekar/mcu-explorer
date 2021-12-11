
data_list = [
    {budget: '1000000', gross_income: '3000000', awards: '10'},
    {budget: '1500000', gross_income: '1500000', awards: '2'},
    {budget: '360000', gross_income: '800000', awards: '8'}
 ];

console.log("Kilroy started the parallel");

parallelChart = ParallelCoordv3(data_list,{});
console.log("Kilroy saw the parallel");
console.log(parallelChart);

document.getElementById('parallel-coo-chart').appendChild(parallelChart);