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
performance.mark('foo')
for (let i = 0; i < 1E6; i++) {

}
performance.mark('bar')
performance.measure('baz', 'foo', 'bar')
const [differenceMark] = performance.getEntriesByType('measure')
console.log(differenceMark)
