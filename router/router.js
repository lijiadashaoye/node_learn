let express = require('express');
var Router = express.Router();

Router.get('/', (req, res) => {
    res.send('Hello World!')
})

// 获取路由参数
Router.param('ids', function (req, res, next, ids) {
    // req.ids = ids;
    // console.log(ids)
    next();
})
Router.get('/:ids', (req, res) => {
    res.send('Hello World!' + req.ids)
})

module.exports = Router;