/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
// 狄克斯特拉
var networkDelayTime = function(times, N, K) {
    // 对应的路径
    const paths = new Map();
    const dist = new Map();
    // 把对应的起点处理起来。
    for(edge of times) {
        if(paths.has(edge[0])) {
            paths.get(edge[0]).push([ edge[1], edge[2] ])
        } else {
            paths.set(edge[0], [ [ edge[1], edge[2] ] ])
        }
    }
    // 把所有的路径时间都设置为无穷大
    for(let i = 1; i <= N; i++) {
        dist.set(i, Infinity);
    }
    // 把起点的时间设置为0
    dist.set(K, 0);
    const visited = new Array(N + 1).fill(false);
    while(true) {
        let cand = -1
        let cand_cost = Infinity
        for(let i = 1;i <= N; i++) {
/* 注意，这里用dist.get(i) < cand_cost 而不是dist.get(i) !== Infinity
是因为有可能有些点只能通过较大的点到达，如果先遍历较大的点，这时较大的点
还没有获取到它最小的耗时，那么通过较大的点才能到达的点的耗时就永远是比较大的，
而不是最小的。这就是迪杰斯特拉算法要从源点开始遍历，并优先遍历离源点代价较小的
点的原因:如果一个点存在多个到达代价，那么必须先让这个点获得多个代价中的最小值，然后才能以这
个点开始作为中间的起点遍历。
            */
           console.log('visited[i]', visited[i]);
           console.log('cand_cost', cand_cost);
            if((!visited[i]) && (dist.get(i) < cand_cost)) {
                cand = i
                cand_cost = dist.get(i)
            }
        }
        if(cand === -1) break
        visited[cand] = true;
        if(paths.has(cand)) {
            for(info of paths.get(cand)) {
                dist.set(info[0], Math.min(dist.get(info[0]), dist.get(cand) + info[1]))
            }
        }
    }
    let ans = 0
    for(v of dist) {
        if(v[1] === Infinity) {
            return -1;
        }
        ans = Math.max(ans, v[1])
    }
    return ans
};
console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2));
// console.log(networkDelayTime([[1,2,1]], 2, 1));
// console.log(networkDelayTime([[1,2,1]], 2, 2));
// console.log(networkDelayTime([[1,2,0]], 2, 1));
// console.log(networkDelayTime([[1,2,0]], 3, 1));
// console.log(networkDelayTime([[1,2,4], [2,1,0]], 2, 1));
// 有 n 个网络节点，标记为 1 到 n。
// 给你一个列表 times，表示信号经过 有向 边的传递时间。 
// times[i] = (ui, vi, wi)，
// 其中 ui 是源节点，vi 是目标节点， wi 是一个信号从源节点传递到目标节点的时间。
// 现在，从某个节点 K 发出一个信号。需要多久才能使所有节点都收到信号？如果不能使所有节点收到信号，返回 -1 。

// 示例 1：
// 输入：times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
// 输出：2

// 示例 2：
// 输入：times = [[1,2,1]], n = 2, k = 1
// 输出：1

// 示例 3：
// 输入：times = [[1,2,1]], n = 2, k = 2
// 输出：-1