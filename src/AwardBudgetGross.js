parallelChart = ParallelCoord(JSON_FILE_COOL, {
    x: (d) => Object.keys(JSON_FILE_COOL),
    y: (d) => {
        Y = []
        for (o in Object.values(JSON_FILE_COOL)){
            Y.push(Object.keys);
        }
        return Y
    }
    
});

document.getElementById('parallel-chart').appendChild(parallelChart);