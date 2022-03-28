class Depend {
    constructor() {
        // 用于存放响应式函数
        this.reactiveFns = []
    }

    // 用户添加响应式函数
    addDependFn(fn) {
        this.reactiveFns.push(fn)
    }

    // 用于执行响应式函数
    notify() {
        this.reactiveFns.forEach(fn => {
            fn()
        })
    }
}

const obj = {
    name: 'curry',
    age: 30
}

const dep = new Depend()
// 在watchFn中使用dep的addDependFn来收集
function watchFn(fn) {
    dep.addDependFn(fn)
}

// 创建一个Proxy
const objProxy = new Proxy(obj, {
    get: function(target, key, receiver) {
        return Reflect.get(target, key, receiver)
    },
    set: function(target, key, newValue, receiver) {
        Reflect.set(target, key, newValue, receiver)
        // 当set捕获器捕获到属性变化时，自动去调用notify
        dep.notify()
    }
})

watchFn(function() {
    let newName = objProxy.name
    console.log(newName)
    console.log('1:' + objProxy.name)
})

watchFn(function() {
    console.log('2:' + objProxy.name)
})

objProxy.name = 'kobe'
objProxy.name = 'klay'
objProxy.name = 'james'
