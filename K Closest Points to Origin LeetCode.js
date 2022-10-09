const kClosest = function(points, k) {
    const calculated_distances = [];
    const resultIndexs = [];

    for(let i = 0; i < points.length; i++)
        calculated_distances.push({index: i, result: points[i][0] ** 2 + points[i][1] ** 2});

    calculated_distances.sort((a, b) => a.result - b.result);
    
    for(let i = 0; i < k; i++) 
        resultIndexs.push(calculated_distances[i].index);

    console.log(resultIndexs);
    return resultIndexs.map((resultIndex) => points[resultIndex])
};
