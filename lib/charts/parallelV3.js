function ParallelCoordv3(
    data,
    {
    }
  ) {

    console.log("Kilroy actually saw God!");
    const margin = {top: 30, right: 10, bottom: 10, left: 0},
    width = 500 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.create('svg')
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    
    svg
    .append("g")
    .attr("transform",
            'translate(${margin.left},${margin.top})');

    // Parse the Data

    // Extract the list of dimensions we want to keep in the plot. Here I keep all except the column called Species
    dimensions = Object.keys(data[0]);
    console.log(data);

    // For each dimension, I build a linear scale. I store all in a y object
    const y = {}
    for (i in dimensions) {
        new_name = dimensions[i]
        y[new_name] = d3.scaleLinear()
        .domain( d3.extent(data, function(d) { return +d[new_name]; }) )
        .range([height, 0])
    }
    console.log(y);

    // Build the X scale -> it find the best position for each Y axis
    x = d3.scalePoint()
        .range([0, width])
        .padding(1)
        .domain(dimensions);

    // The path function take a row of the csv as input, and return x and y coordinates of the line to draw for this raw.
    function path(d) {
        return d3.line()(dimensions.map(function(p) { return [x(p), y[p](d[p])]; }));
    }

    // Draw the lines
    svg
        .selectAll("myPath")
        .data(data)
        .join("path")
        .attr("d",  path)
        .style("fill", "none")
        .style("stroke", "#69b3a2")
        .style("opacity", 0.5);

    // Draw the axis:
    svg.selectAll("myAxis")
        // For each dimension of the dataset I add a 'g' element:
        .data(dimensions).enter()
        .append("g")
        // I translate this element to its right position on the x axis
        .attr("transform", function(d) { return "translate(" + x(d) + ")"; })
        // And I build the axis with the call function
        .each(function(d) { d3.select(this).call(d3.axisLeft().scale(y[d])); })
        // Add axis title
        .append("text")
        .style("text-anchor", "middle")
        .attr("y", -9)
        .text(function(d) { return d; })
        .style("fill", "black");

        return svg.node();
  };