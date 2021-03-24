function findScore(times, scores, N) {
    if (times.length === 0) return 0;
    let weight = N / 0.5;
    let len = times.length;
    let dep = new Array(weight + 1).fill(0);
    for (let i = 0; i < len; i++) {
        let cur = times[i];
        let sc = scores[i];
        for (let m = N; m >= cur; m -= 0.5) {
            dep[m] = Math.max((dep[m - cur] + sc), dep[m])
        }
    }
    console.log(dep);
    return dep[weight];
}
console.log(findScore([0.5, 0.5, 1, 2, 0.5], [7, 6, 9, 9, 8], 2))