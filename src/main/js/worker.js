console.log('加载专用工作者线程模块成功.....')
// 向工作者线程发消息
self.postMessage('foo')
// let count = 0;
// setInterval(() => {
//     count = count + 1;
//     self.postMessage('bar.. this.count = ' + count)
// }, 1000)
