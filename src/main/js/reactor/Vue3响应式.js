// https://www.cnblogs.com/MomentYY/p/16065162.html

// 定义一个全局变量，存放当前需要收集的响应式函数
let currentReactiveFn = null

class Depend {
    constructor() {
        // 用于存放响应式函数, set可以去重
        this.reactiveFns = new Set();
    }

    // 用户添加响应式函数
    addDependFn() {
        // 先判断一下currentReactiveFn是否有值
        if (currentReactiveFn) {
            this.reactiveFns.add(currentReactiveFn)
        }
    }

    // 用于执行响应式函数
    notify() {
        this.reactiveFns.forEach(fn => {
            fn()
        })
    }
}

// 1.创建一个WeakMap存储结构，存放对象
const objWeakMap = new WeakMap()
// 2.封装一个获取dep的函数
function getDepend(obj, key) {
    // 2.1.根据对象，获取对应的map
    let map = objWeakMap.get(obj)
    // 如果是第一次获取这个map，那么需要先创建一个map
    if (!map) {
        map = new Map()
        // 将map存到objWeakMap中对应key上
        objWeakMap.set(obj, map)
    }

    // 2.2.根据对象的属性，获取对应的dep
    let dep = map.get(key)
    // 如果是第一次获取这个dep，那么需要先创建一个dep
    if (!dep) {
        dep = new Depend()
        // 将dep存到map中对应的key上
        map.set(key, dep)
    }

    // 2.3最终将dep返回出去
    return dep
}

const obj = {
    name: 'curry',
    age: 30
}

function watchFn(fn) {
    currentReactiveFn = fn
    // 先调用一次函数，提醒Proxy的get捕获器需要收集响应式函数了
    fn()
    // 收集完成将currentReactiveFn重置
    currentReactiveFn = null
}

// vue3响应式原理 针对对象属性的拦截处理（get中实现拦截，set中实现监听并通知）
function reactive(obj) {
    return new Proxy(obj, {
        get: function(target, key, receiver) {
            const dep = getDepend(target, key)
            // 直接调用addDepend方法，让它去收集
            dep.addDependFn()
            return Reflect.get(target, key, receiver)
        },
        set: function(target, key, newValue, receiver) {
            Reflect.set(target, key, newValue, receiver)
            // 根据当前对象target和设置的key，去获取对应的dep
            const dep = getDepend(target, key)
            // 当set捕获器捕获到属性变化时，自动去调用notify
            dep.notify()
        }
    })
}

const obj1 = { name: 'curry', age: 30 }
const obj2 = { weight: '130', height: '180' }

const obj1Proxy = reactive(obj1)
const obj2Proxy = reactive(obj2)

watchFn(function() {
    console.log('我依赖了obj1的name属性')
    console.log(obj1Proxy.name)
})
watchFn(function() {
    console.log('我依赖了age属性')
    console.log(obj1Proxy.age)
})

watchFn(function() {
    console.log('我依赖了obj2的weight属性')
    console.log(obj2Proxy.weight)
})
watchFn(function() {
    console.log('我依赖了obj2的height属性')
    console.log(obj2Proxy.height)
})

console.log('----------以上为初始化执行，以下为修改后执行-------------')

obj1Proxy.name = 'kobe'
obj1Proxy.age = 24
obj2Proxy.weight = 100
obj2Proxy.height = 165


