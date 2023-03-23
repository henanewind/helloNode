// let hello = require('./async.js')
// let res = "xxx"
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

// console.log = function () {
//     const args = Array.prototype.slice().call(arguments)
//     console.log(args.join(', '))
// }
//
// console.log('hello', 'world.')

// let r = new Response();
// console.log(r)

// let w = new WebSocket("")
// w.send()
// w.binaryType
// w.onmessage

// let a1 = require('./ModuleA')
// let a2 = require('./ModuleA')
// // module永远是单例
// console.log(a1 === a2)
// let Log = require('./CallDelay')
// Log(1)

let {encryptPasswd} = require('./utils/encrypt_rsa')
let enPassword = encryptPasswd('123456',
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjIcRPlmvVVGBy2U0Fwk8jz9/KtBsEA2IZNKfJvSfoxdPfWLtI8e521c4zXA2OCgWiksrslhi5H3O/pMG/aTZIUevW50IgSAjJdArrhM1BTID5FyRgYYcqeGS3XET1WmRFQltp58RUFLo8v7HPbRHWrC/4o5HraVOxHaQqaSOMA9aAEUvluIRvDtTUGMqJE9i5iVDmZrK5igMFAj0UnmHbuqhW1ssyZ1of8M/soGicqn5i95KyW1olq7ed8RIDbhuXuv2SyDSkRGiKBKBN+65W6m1islCeKJX/Dr8EmVYwfotq5wFAY/GtoTWTb52MEcnZUwxmxqkD/btNrlY4Zb+/wIDAQAB',
    '048780')
console.log(enPassword)

