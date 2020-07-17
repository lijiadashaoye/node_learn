let express = require('express');
let app = express();

let bodyParser = require('body-parser');
/*
   body-parser介绍：https://www.jianshu.com/p/cd3de110b4b6
   当请求体解析之后，解析值会被放到req.body属性中，当内容为空时候，为一个空对象{}
   ---bodyParser.json()--解析JSON格式
   ---bodyParser.raw()--解析二进制格式
   ---bodyParser.text()--解析文本格式
   ---bodyParser.urlencoded()--解析文本格式
*/
// app.use(); 会拦截每一次的请求

// 解析 application/json
let jsonParser = app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded
let urlencodedParser = app.use(bodyParser.urlencoded({
    extended: false
}));

// 静态文件
app.use('/',express.static(__dirname + '/static'));


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.post('/login', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log(req)
    res.send('welcome, ' + req.body.username);
})


app.listen(5554)