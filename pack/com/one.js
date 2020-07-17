// 第一种导出写法，导出一个直接可以使用的函数
// module.exports = function () {
//     console.log('one')
// }

// 第二种导出写法，导出一个对象，需要再 one.one，才能读取到one函数
module.exports = {
    one: function () {
        console.log('one')
    }
}

// 如果要对外暴露属性或方法，就用 exports 就行，
// 要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports。