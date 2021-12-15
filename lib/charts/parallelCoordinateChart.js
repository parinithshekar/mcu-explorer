function ParallelCoordinateChart(data, axisDomain, excludeKeys) {
  // set the dimensions and margins of the graph
  const margin = { top: 50, right: 10, bottom: 10, left: 0 },
    width = 1600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  const pcTooltip = d3
    .select('#root')
    .append('div')
    .style('opacity', 0)
    .attr('class', 'custom-tooltip')
    .style('background-color', 'white')
    .style('border', 'solid')
    .style('border-width', '2px')
    .style('border-radius', '5px')
    .style('padding', '5px')
    .style('white-space', 'pre-line');

  // append the svg object to the body of the page
  const rootSvg = d3
    // .select('#my_dataviz')
    // .append('svg')
    .create('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom);

  svg = rootSvg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

  // Extract the list of dimensions we want to keep in the plot. Exclude the keys that are not needed
  dimensions = Object.keys(data[0]).filter(function (d) {
    return !excludeKeys.includes(d);
    // return d != 'Species';
  });

  // For each dimension, I build a linear scale. I store all in a y object
  const y = {};
  for (i in dimensions) {
    name = dimensions[i];
    y[name] = d3
      .scaleLinear()
      // Scale axis from min to max_value
      //   .domain(
      //     d3.extent(data, function (d) {
      //       return +d[name];
      //     })
      //   )
      // Scale axis from 0 to (max_value + min_value) for better readability
      // .domain([
      //   0,
      //   d3.max(Object.values(movieStats), (d) => +d[name]) +
      //     d3.min(Object.values(movieStats), (d) => +d[name]),
      // ])
      .domain(axisDomain[name])
      .range([height, 0]);
  }

  // Build the X scale -> it find the best position for each Y axis
  x = d3.scalePoint().range([0, width]).padding(1).domain(dimensions);

  // The path function take a row of the csv as input, and return x and y coordinates of the line to draw for this raw.
  function path(d) {
    return d3.line()(
      dimensions.map(function (p) {
        return [x(p), y[p](d[p])];
      })
    );
  }

  // Draw the lines
  svg
    .selectAll('myPath')
    .data(data)
    .join('path')
    .attr('d', path)
    .style('fill', 'none')
    .style('stroke', '#69b3a2')
    .style('stroke', (d) => colorForId(d.id))
    .style('stroke-width', '12px')
    .style('stroke-linecap', 'round')
    .style('stroke-linejoin', 'round')
    .style('opacity', 0.6)
    .attr('chart', 'pcChart')
    .attr('movieId', (d) => d.id)
    .on('mouseover', function (d) {
      // Enable tooltip
      pcTooltip.style('opacity', 1);
      // Color the chart gray
      d3.selectAll('[chart="pcChart"]').style('stroke', 'gray');
      // Re-assign color to current element
      index = this.getAttribute('movieId');
      d3.select(this).style('stroke', colorForId(index)).style('opacity', 0.9);
    })
    .on('mousemove', function (d) {
      const movieId = Number(d3.select(this).attr('movieId'));
      const movieInfo = {
        ...movieStats[movieId],
        name: MOVIE[movieId].name,
      };

      // Create tooltip strings
      let tooltipString = `${movieInfo.name}\nBudget: ${formatStats(
        movieInfo.budget
      )}\nGross Earnings: ${formatStats(movieInfo.gross)}\nNominations: ${
        movieInfo.nominations
      }\nAwards: ${movieInfo.awards}\nRelease Year: ${movieInfo.year}`;

      // Move tooltip according to mouse
      pcTooltip
        .html(tooltipString)
        .style('left', event.pageX + 10 + 'px')
        .style('top', event.pageY - 60 + 'px');
    })
    .on('mouseout', function (d) {
      // Disable tooltip
      pcTooltip.html('').style('opacity', 0).style('left', 0).style('top', 0);
      // Re-assign colors to the chart
      d3.selectAll('[chart="pcChart"]')
        .style('stroke', (d) => colorForId(d.id))
        .style('opacity', 0.6);
    });

  // Draw the axis:
  svg
    .selectAll('myAxis')
    // For each dimension of the dataset I add a 'g' element:
    .data(dimensions)
    .enter()
    .append('g')
    // I translate this element to its right position on the x axis
    .attr('transform', function (d) {
      return 'translate(' + x(d) + ')';
    })
    // And I build the axis with the call function
    .each(function (d) {
      d3.select(this).call(
        d3
          .axisLeft()
          .scale(y[d])
          .tickFormat((d) => formatStats(d))
      );
    })
    // Add axis title
    .append('text')
    .style('text-anchor', 'middle')
    .attr('y', -9)
    .text(function (d) {
      return capitalizeFirstLetter(d);
    })
    .style('fill', 'black');

  return rootSvg.node();
}
