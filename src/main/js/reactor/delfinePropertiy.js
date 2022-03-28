// const obj = {
//     name: 'curry',
//     age: 30
// }
//
// // 1.拿到obj所有的key
// const keys = Object.keys(obj)
//
// // 2.遍历obj所有的key，并设置存取属性描述符
// keys.forEach(key => {
//     let value = obj[key]
//
//     Object.defineProperty(obj, key, {
//         get: function() {
//             console.log(`obj对象的${key}属性被访问啦！`)
//             return value
//         },
//         set: function(newValue) {
//             console.log(`obj对象的${key}属性被设置啦！`)
//             value = newValue
//         }
//     })
// })
//
// // 设置：
// obj.name = 'kobe' // obj对象的name属性被设置啦！
// obj.age = 24 // obj对象的age属性被设置啦！
// // 访问：
// console.log(obj.name) // obj对象的name属性被访问啦！
// console.log(obj.age) // obj对象的age属性被访问啦！

// function fn(x, y) {
//     return x + y
// }
//
// const fnProxy = new Proxy(fn, {
//     /*
//       target: 目标函数（fn）
//       thisArg: 指定的this对象，也就是被调用时的上下文对象（{ name: 'curry' }）
//       argumentsList: 被调用时传递的参数列表（[1, 2]）
//     */
//     apply: function(target, thisArg, argumentsList) {
//         console.log('fn函数使用apply进行了调用')
//         return target.apply(thisArg, argumentsList)
//     },
//     /*
//       target: 目标函数（fn）
//       argumentsList: 被调用时传递的参数列表
//       newTarget: 最初被调用的构造函数（fnProxy）
//     */
//     construct: function(target, argumentsList, newTarget) {
//         console.log('fn函数使用new进行了调用')
//         return new target(...argumentsList)
//     }
// })
//
// fnProxy.apply({ name: 'curry' }, [1, 2]) // fn函数使用apply进行了调用
// new fnProxy() // fn函数使用new进行了调用

// const obj = {
//     name: 'curry',
//     age: 30
// }
//
// // 创建obj的代理对象
// const objProxy = new Proxy(obj, {
//     // 获取对象属性值的捕获器
//     get: function(target, key) {
//         console.log(`obj对象的${key}属性被访问啦！`)
//         return Reflect.get(target, key)
//     },
//     // 设置对象属性值的捕获器
//     set: function(target, key, newValue) {
//         console.log(`obj对象的${key}属性被设置啦！`)
//         Reflect.set(target, key, newValue)
//     },
//     // 删除对象属性的捕获器
//     deleteProperty: function(target, key) {
//         console.log(`obj对象的${key}属性被删除啦！`)
//         Reflect.deleteProperty(target, key)
//     }
// })
//
// // 设置：
// objProxy.name = 'kobe' // obj对象的name属性被设置啦！
// objProxy.age = 24 // obj对象的age属性被设置啦！
// // 访问：
// console.log(objProxy.name) // obj对象的name属性被访问啦！
// console.log(objProxy.age) // obj对象的age属性被访问啦！
// // 删除：
// delete objProxy.name // obj对象的name属性被删除啦！

// function Person(name, age) {
//     this.name = name
//     this.age = age
// }
//
// function Student() {}
//
// const stu = Reflect.construct(Person, ['curry', 30], Student)
// // 实例对象的类型为Student
// console.log(stu)
// // 实例对象原型指向Student构造函数的原型
// console.log(stu.__proto__ === Student.prototype)

// 假设obj的age为私有属性，需要通过getter和setter来访问和设置
const obj = {
    name: 'curry',
    _age: 30,
    get age() {
        return this._age
    },
    set age(newValue) {
        this._age = newValue
    }
}

const objProxy = new Proxy(obj, {
    get: function(target, key, reveiver) {
        console.log(`obj对象的${key}属性被访问啦！`)
        // return Reflect.get(target, key)
        return Reflect.get(target, key, reveiver)
    },
    set: function(target, key, newValue, reveiver) {
        console.log(`obj对象的${key}属性被设置啦！`)
        // Reflect.set(target, key, newValue)
        Reflect.set(target, key, newValue, reveiver)
    }
})

// 设置：
objProxy.name = 'kobe'
objProxy.age = 24
// 访问：
console.log(objProxy.name)
console.log(objProxy.age)
