let hello = require('./async.js')
// hello.addLog('你好...')
let msg = null;
console.log(msg == null)
let res = typeof msg == "undefined"
hello.addLog('res = ' + res)