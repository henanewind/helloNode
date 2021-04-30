// let hello = require('./async.js')
// hello.addLog('res = ' + res)
// require('./angleUtils.js')
// hello.addLog('你好...')
// let msg = null;
// console.log(msg == null)
//
// let res = typeof msg == "undefined"
// let str = '0.5L';
// let qx = str.indexOf('L') + 1
// console.log(qx)
// str = str.substring(0, qx -1);
//
// console.log(str)
// require('./atomics')
// let url = "http://localhost:8088/"
// const webSocketUrl = `${url}websocket/train`
// console.log(webSocketUrl)
// let randoms = new Uint8Array(1);
// for (let i = 0; i < 5; i++) {
//     let str = crypto.getRandomValues(randoms)
//     console.log('i =', str)
// }

//RangeError: Invalid array length
// let item1 = new Array(-20)
// let item2 = new Array(Number.MAX_VALUE)
// ReferenceError: x is not defined
// let obj = x
// TypeError: Function.prototype.toString(...).call is not a function
// Function.prototype.toString().call("hello")

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError"
        this.message = message
    }
}
try {
    // Array.prototype.toString().call(null, "hello")
    // throw {name: "hello"}
    // throw new Error("hello world.")
    throw new CustomError("hello world.")
} catch (error) {
    // 捕获错误或异常的时机：明确知道接下来如何做的时候抛出错误.
    if (error instanceof TypeError) {
        console.log("类型错误")
    } else {
        console.log(error)
    }
}

// window.onerror = (event, source, lineno) => {
//     console.log(event)
// }

// let img = new Image();
// img.addEventListener('load', () => {
//     console.log('image load...')
// })
//
// img.addEventListener('error', () => {
//     console.log('image load error.')
// })
