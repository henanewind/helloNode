
let {log} = console;

// 数组跳过空位
// ([,'a']).forEach((x, i) => log(i))
// let result = ['a', , 'b'].filter(x => true);
// console.log(result)
// result = [, 'a'].every(x => x === 'a');
// log(result)
// result = [, 'a'].some(x => x !== 'a')
// log(result)
// result = [, 'a'].map(x => 1)
// log(result)
// // join,toString转为空字符串
// result = [, 'a', undefined, null].join('#')
// log(result)
// result = [, 'a', undefined, null].toString()
// log(result)
// // es6 将 空位 转为 undefined
// result = Array.from(['a',,'b'])
// log(result)
// result = [...[, 'a', , 'b']]
// log(result)
//
// result = [, 'a', 'b' , ,].copyWithin(2, 0)
// log(result)
//
// result = new Array(3).fill('a')
// log(result)
// result = [,,]
// for(let i of result) {
//     log(9)
// }

console.log([...[, 'a'].entries()])
console.log([...[, 'a'].keys()])
console.log([...[, 'a'].values()])
// 空位处理规则不一，建议避免使用
console.log([, 'a'].find(x => true))  // undefined (空位没有忽略)
console.log([, 'a'].findIndex(x => true))  // 0 (不忽略空位)

