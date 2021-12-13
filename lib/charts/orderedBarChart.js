// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/sortable-bar-chart
function BarChart(
  data,
  {
    x = (d, i) => i, // given d in data, returns the (ordinal) x-value
    y = (d) => d, // given d in data, returns the (quantitative) y-value
    marginTop = 15, // the top margin, in pixels
    marginRight = 0, // the right margin, in pixels
    marginBottom = 30, // the bottom margin, in pixels
    marginLeft = 70, // the left margin, in pixels
    width = 640, // the outer width of the chart, in pixels
    height = 800, // the outer height of the chart, in pixels
    xDomain, // an array of (ordinal) x-values
    xRange = [marginLeft, width - marginRight], // [left, right]
    yType = d3.scaleLinear, // type of y-scale
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
    xPadding = 0.1, // amount of x-range to reserve to separate bars
    yFormat, // a format specifier string for the y-axis
    yLabel, // a label for the y-axis
    color = 'currentColor', // bar fill color
    customColors,
    duration: initialDuration = 250, // transition duration, in milliseconds
    delay: initialDelay = (_, i) => i * 20, // per-element transition delay, in milliseconds
  } = {}
) {
  // Compute values.
  const X = d3.map(data, x);
  const Y = d3.map(data, y);

  // Compute default domains, and unique the x-domain.
  if (xDomain === undefined) xDomain = X;
  if (yDomain === undefined) yDomain = [0, d3.max(Y)];
  xDomain = new d3.InternSet(xDomain);

  // Omit any data not present in the x-domain.
  const I = d3.range(X.length).filter((i) => xDomain.has(X[i]));

  // Construct scales, axes, and formats.
  const xScale = d3.scaleBand(xDomain, xRange).padding(xPadding);
  const yScale = yType(yDomain, yRange);
  const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
  const yAxis = d3
    .axisLeft(yScale)
    .ticks(height / 40)
    .tickFormat((d) => formatStats(d));
  const format = yScale.tickFormat(100, yFormat);

  const svg = d3
    .create('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height])
    .attr('style', 'max-width: 100%; height: auto; height: intrinsic;');

  const yGroup = svg
    .append('g')
    .attr('transform', `translate(${marginLeft},0)`)
    .call(yAxis)
    .call((g) => g.select('.domain').remove())
    .call((g) => g.selectAll('.tick').call(grid))
    .call((g) =>
      g
        .append('text')
        .attr('x', -marginLeft)
        .attr('y', 10)
        .attr('fill', 'currentColor')
        .attr('text-anchor', 'start')
        .text(yLabel)
        .on('mouseover', function (d) {
          d3.select(this).style('fill', 'gray');
        })
        .on('mouseout', function (d) {
          d3.select(this).style('fill', 'currentColor');
        })
    );

  const movieBarTooltip = d3
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

  let rect = svg
    .append('g')
    // .attr('fill', color)
    .attr('fill', (d) => {
      console.log(d);
      return color;
    })
    .selectAll('rect')
    .data(I)
    .join('rect')
    .attr('fill', (i) => customColors[i])
    .attr('chart', 'obchart')
    .attr('index', (i) => i)
    .property('key', (i) => X[i]) // for future transitions
    .call(
      position,
      (i) => xScale(X[i]),
      (i) => yScale(Y[i])
    )
    .style('mix-blend-mode', 'multiply')
    .call((rect) => rect.append('tooltipText').text((i) => [X[i], formatStats(Y[i])].join('\n')))
    .on('mouseover', function (d) {
      // enable tooltip
      movieBarTooltip.style('opacity', 1);
      d3.selectAll('[chart="obchart"]').attr('fill', 'gray');
      const index = this.getAttribute('index');
      d3.select(this).attr('fill', customColors[index]);
    })
    .on('mousemove', function (d) {
      const movieIndex = Number(d3.select(this).attr('index'));
      const movieInfo = data[movieIndex];

      // Create tooltip strings
      let tooltipString = `${movieInfo.name}\nBudget: ${formatStats(
        movieInfo.budget
      )}\nGross Earnings: ${formatStats(movieInfo.gross)}\nNominations: ${
        movieInfo.nominations
      }\nAwards: ${movieInfo.awards}\nRelease Year: ${movieInfo.year}`;

      movieBarTooltip
        .html(tooltipString)
        .style('left', event.pageX + 10 + 'px')
        .style('top', event.pageY - 60 + 'px');
    })
    .on('mouseout', function (d) {
      movieBarTooltip.html('').style('opacity', 0).style('left', 0).style('top', 0);
      d3.selectAll('[chart="obchart"]').attr('fill', (i) => customColors[i]);
    });

  const xGroup = svg
    .append('g')
    .attr('transform', `translate(0,${height - marginBottom})`)
    .call(xAxis);

  // A helper method for updating the position of bars.
  function position(rect, x, y) {
    return rect
      .attr('x', x)
      .attr('y', y)
      .attr('height', typeof y === 'function' ? (i) => yScale(0) - y(i) : (i) => yScale(0) - y)
      .attr('width', xScale.bandwidth());
  }

  // A helper method for generating grid lines on the y-axis.
  function grid(tick) {
    return tick
      .append('line')
      .attr('class', 'grid')
      .attr('x2', width - marginLeft - marginRight)
      .attr('stroke', 'currentColor')
      .attr('stroke-opacity', 0.1);
  }

  // Call chart.update(data, options) to transition to new data.
  return Object.assign(svg.node(), {
    update(
      data,
      {
        xDomain, // an array of (ordinal) x-values
        yDomain, // [ymin, ymax]
        duration = initialDuration, // transition duration, in milliseconds
        delay = initialDelay, // per-element transition delay, in milliseconds
      } = {}
    ) {
      // Compute values.
      const X = d3.map(data, x);
      const Y = d3.map(data, y);

      // Compute default domains, and unique the x-domain.
      if (xDomain === undefined) xDomain = X;
      if (yDomain === undefined) yDomain = [0, d3.max(Y)];
      xDomain = new d3.InternSet(xDomain);

      // Omit any data not present in the x-domain.
      const I = d3.range(X.length).filter((i) => xDomain.has(X[i]));

      // Update scale domains.
      xScale.domain(xDomain);
      yScale.domain(yDomain);

      // Start a transition.
      const t = svg.transition().duration(duration);

      // Join the data, applying enter and exit.
      rect = rect
        .data(I, function (i) {
          return this.tagName === 'rect' ? this.key : X[i];
        })
        .join(
          (enter) =>
            enter
              .append('rect')
              .property('key', (i) => X[i]) // for future transitions
              .call(position, (i) => xScale(X[i]), yScale(0))
              .style('mix-blend-mode', 'multiply')
              .call((enter) => enter.append('title')),
          (update) => update,
          (exit) => exit.transition(t).delay(delay).attr('y', yScale(0)).attr('height', 0).remove()
        );

      // Update the title text on all entering and updating bars.
      rect.select('title').text((i) => [X[i], formatStats(Y[i])].join('\n'));

      // Transition entering and updating bars to their new position. Note
      // that this assumes that the input data and the x-domain are in the
      // same order, or else the ticks and bars may have different delays.
      rect
        .transition(t)
        .delay(delay)
        .call(
          position,
          (i) => xScale(X[i]),
          (i) => yScale(Y[i])
        );

      // Transition the x-axis (using a possibly staggered delay per tick).
      xGroup
        .transition(t)
        .call(xAxis)
        .call((g) => g.selectAll('.tick').delay(delay));

      // Transition the y-axis, then post process for grid lines etc.
      yGroup
        .transition(t)
        .call(yAxis)
        .selection()
        .call((g) => g.select('.domain').remove())
        .call((g) => g.selectAll('.tick').selectAll('.grid').data([,]).join(grid));
    },
  });
}
