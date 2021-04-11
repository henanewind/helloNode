let {log} = console
// 1.js高级程序设计第4版，描述是bar()先执行,foo()后执行
// 测试发现，那个执行顺序和调用先后有关
async function foo() {
    // log(await Promise.resolve('foo'))
    log(await new Promise((resolve, reject) => resolve('foo')))
}

async function bar() {
    log(await 'bar')
}

async function baz() {
    log('baz')
}

function addLog(content) {
    log(content)
}

module.exports = { addLog }

foo()
bar()
baz()