// 所有路径
var obj = {
    "乐谱": { "黑胶唱片": 5, "海报": 0 },
    "海报": { "低音吉他": 30, "架子鼓": 35 },
    "黑胶唱片": { "低音吉他": 15, "架子鼓": 20 },
    "低音吉他": { "钢琴": 20 },
    "架子鼓": { "钢琴": 10 },
    "钢琴": {},
}
// 花费
var costs = {
    "海报": 0,
    "黑胶唱片": 5,
    "低音吉他": Infinity,
    "钢琴": Infinity,
    "架子鼓": Infinity
}
// 路径
var parents = {
    "乐谱": "start",
    "海报": "乐谱",
    "黑胶唱片": "乐谱",
    "低音吉他": null,
    "架子鼓": null,
    "钢琴": null,
}
// 已经检查过的最低花费元素
var processed = []
//循环遍历花费找出最低花费元素并返回
function find_lowest_cost_node(json_obj, arr) {
    let lowest_cost = Infinity
    let lowest_cost_node = null
    for (let json_obj_node in json_obj) {
        if (json_obj[json_obj_node] < lowest_cost && arr.indexOf(json_obj_node) == -1) {
            lowest_cost = json_obj[json_obj_node]
            lowest_cost_node = json_obj_node
        }
    }
    return lowest_cost_node
}
// 狄克斯特拉算法
function dekesitela(json_obj, json_cost, json_parent, arr) {
    let node = find_lowest_cost_node(json_cost, arr)
    while (node != null) {
        for (let json_obj_node in json_obj[node]) {
            if (json_cost[node] + json_obj[node][json_obj_node] < json_cost[json_obj_node]) {
                costs[json_obj_node] = json_cost[node] + json_obj[node][json_obj_node]
                json_parent[json_obj_node] = node
            }
        }
        // 已经检查过的最低花费元素放在数组
        arr.push(node)
        node = find_lowest_cost_node(json_cost, arr)
    }
}
dekesitela(obj, costs, parents, processed);
console.log(parents);
console.log(costs);