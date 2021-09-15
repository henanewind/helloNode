// async function f() {
//     return "hello world."
// }
// const f = async () => "hello world."
const f = async () => {throw new Error("出错误了")}

// async function f() {
//     throw new Error("出错误了")
// }

f().then(
    r => console.log(r),
    e => console.log(e)
)
// async 函数内存在异步操作 , await 将异步转同步
// async 函数返回值是一个Promis对象，可以使用then进行回调处理, 也可作为await后的函数
const timeout = async (ms) => {await new Promise(resolve => setTimeout(resolve, ms))}
async function asyncPrint(value, ms) {
    await timeout(ms)
    console.log(value)
}

asyncPrint("hello world2.", 2000)

let obj = {};
Object.defineProperty(obj, 'a', {
    configurable: false,  // 不可配置的属性在代理拦截时，必须被返回，否则报错
    enumerable: true,
    value: 10
})
// Uncaught TypeError: 'ownKeys' on proxy: trap result did not include 'a'
const p = new Proxy(obj, {
    ownKeys(target) {
        return ['a', 'b', 'c']
    }
})

console.log(Object.getOwnPropertyNames(p))
