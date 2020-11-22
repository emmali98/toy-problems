var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let merged = [intervals[0]];
  let prev = merged[0];

  for (let interval of intervals) {
    if (interval[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], interval[1]);
    } else {
      merged.push(interval);
      prev = interval;
    }
  }

  return merged;
}
