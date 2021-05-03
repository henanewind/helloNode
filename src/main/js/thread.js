let worker = new Worker('./js/worker.js')
worker.onmessage = (event) => console.log('收到消息：', event.data)
