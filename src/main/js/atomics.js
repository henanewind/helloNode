// 创建大小为1字节的缓冲区域
let sharedArrayBuffer = new SharedArrayBuffer(1);
// 基于缓存创建定性数组
let typeArray = new Uint8Array(sharedArrayBuffer);

console.log(typeArray)  // Uint8Array(1) [ 0 ]

let index = 0;
let increment = 5;
// add 第一个参数为定型数组，后面为操作数， 对索引index处执行加操作
Atomics.add(typeArray, index, increment);
console.log(typeArray)  // Uint8Array(1) [ 5 ]

let decrement = 3
// 对索引为 index 的位置执行原子减法操作
Atomics.sub(typeArray, index, decrement);
console.log(typeArray)

Atomics.or(typeArray, index, 0b1111);
console.log(typeArray)

Atomics.or(typeArray, index, 0b1111);
console.log(typeArray)

Atomics.and(typeArray, index, 0b1111);
console.log(typeArray)

Atomics.xor(typeArray, index, 0b1100);
console.log(typeArray)

// 1.非原子写，在load之前发生
sharedArrayBuffer = new SharedArrayBuffer(4)
let buffer32 = new Uint32Array(sharedArrayBuffer)
// 非原子写
buffer32[0] = 1
console.log('load =', Atomics.load(buffer32, 0))
// 2.非原子读，在store之后发生
Atomics.store(buffer32, 0, 2)
console.log('非原子读0 =', buffer32[0])

Atomics.exchange(buffer32, 0, 5)
console.log('exchange =', buffer32[0])
let initial = 5;
Atomics.store(buffer32, 0, initial)
let result = Math.pow(initial, 2);
// Atomics.compareExchange(buffer32, 0, initial, result)
Atomics.compareExchange(buffer32, 0, -1, result)
console.log('compareExchange =', buffer32[0])

// Futex 快速用户空间互斥锁  fast user-space mutex
let aa = new Int32Array(sharedArrayBuffer)
