width = 500;

nodes_list = [ {id:"Thor",value:"Thor"},{id:"IronMan",value:"IronMan"}, {id:"movie1",value:"movie 1"}, {id:"movie2",value:"movie 2"} ];
links_list = [ {source:"Thor",target:"movie1", value:1}, {source:"IronMan",target:"movie1", value:1}, {source:"Thor",target:"movie2", value:1} ];


// console.log(nodes_list);
// console.log(links_list);
charactersAndMoviesCrownChart = SankeyChart(
    {links:links_list},
    {
        nodeGroup: d => d.id.split(/\W/)[0],
        nodeAlign: "justify",
        linkColor: "source-target",
        format: (f => d => '${f(d)} TWh')(d3.format(",.1~f")),
        width,
        height: 600
    });
// console.log("Killroy was here")
document.getElementById('characters-movies-crown').appendChild(charactersAndMoviesCrownChart);