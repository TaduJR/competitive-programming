const merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let output = [intervals[0]], previousEnd;
    for(const [start, end] of intervals.slice(1)) {
        previousEnd = output[output.length - 1][1];
        if(start <= previousEnd) output[output.length - 1][1] = (previousEnd > end) ? previousEnd : end;
        else output.push([start, end]);
    }
    return output;
};
