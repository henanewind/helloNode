console.log('加载专用工作者线程模块成功.....')
// 向工作者线程发消息
self.postMessage('foo')
// let count = 0;
// setInterval(() => {
//     count = count + 1;
//     self.postMessage('bar.. this.count = ' + count)
// }, 1000)

// 普通的工作线程创建子工作者线程
// 路径不是相对网页的路径，而是相对父线程所在脚本的路径
// const subworker = new Worker('subwork.js')

// 子线程监听页面主线程推送消息
self.onmessage = event => self.postMessage('echo:' + event.data);

let globalTocken = 'bar'
console.log(`importing scripts in ${self.name} of ${globalTocken}`)
importScripts('./scriptA.js', './scriptB.js')
