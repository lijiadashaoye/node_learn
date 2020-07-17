let one = require('./com/one').one
let two = require('./com/two').two

// 将几个模块组成一个包，使用package.json 对包做具体路径分析
module.exports = {
    one,
    two
}