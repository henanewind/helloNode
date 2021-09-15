let worker = new Worker('./js/worker.js', {name: 'ust'})
let dt = new Date()
// 监听子线程的消息
worker.onmessage = (event) => console.log(dt.toLocaleString() + '>收到消息：', event.data)
// 向子线程发送消息
worker.postMessage('你好。。。')
