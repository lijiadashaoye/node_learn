let express = require('express');
let app = express();
let bodyParser = require('body-parser');
// 使用路由
let router = require('./router/router');
app.use(router)
/*
   body-parser介绍：https://www.jianshu.com/p/cd3de110b4b6
   当请求体解析之后，解析值会被放到req.body属性中，当内容为空时候，为一个空对象{}
   ---bodyParser.json()--解析JSON格式请求数据
   ---bodyParser.raw()--解析二进制格式请求数据
   ---bodyParser.text()--解析字符串文本格式请求数据
   ---bodyParser.urlencoded()--解析文本格式，请求参数写到url上的请求数据
*/
// app.use(); 会拦截每一次的请求

let jsonParser = app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded
// let urlencodedParser = app.use(bodyParser.urlencoded({
//     extended: false
// }));

// 静态文件，默认读取 index.html
app.use('/static', express.static(__dirname + '/static'));




app.post('/login', jsonParser, function (req, res) {
    res.send('POST request to homepage')
    // if (!req.body) return res.sendStatus(400);
    // console.log(req)
    // res.sendStatus(200)
    // .send('welcome, 名字：' + req.body.name + '密码：' + req.body.pass);
})


app.listen(5554)