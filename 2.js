// let buf = Buffer.from('dfasdf');
// let k = buf.slice(0, 2);
// k.write('gggg');

// // 裁剪功能返回的实际是指向原始缓存区的指针，操作的是与原始 buffer 同一块内存区域。
// // 也就是说，修改剪切的内容，也会影响原始值
// console.log(buf.toString())
// console.log(k.toString())

// Buffer 的拷贝
// var bin = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
// var dup = Buffer.alloc(bin.length);
// bin.copy(dup);
// dup[0] = 0x48;
// console.log(bin); // => <Buffer 68 65 6c 6c 6f>
// console.log(dup); // => <Buffer 48 65 65 6c 6f>

// // 流式读写文件，适用于大文件
// let fs = require('fs');
// // let read = fs.createReadStream('./t.txt');
// // let write = fs.createWriteStream('./out.rar');
// // read.pipe(write)

// 异步读取小文件
// fs.readFile('t.txt', function (err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("异步读取: " + data.toString());
// });

// 读取下级目录的文件
// fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//     console.log( data );
// });

// 同步读取文件
// var data = fs.readFileSync('t.txt');
// console.log("同步读取: " + data.toString());

// 以追加内容的方式往文件内写入内容，适用于小文件
// fs.writeFile('tt.txt', '我是通 过fs.writeFile 写入文件的内容', {
//     flag: 'a'
// }, err => {})

// 异步删除文件
// fs.unlink('tt.txt', err => {})

// let fs = require('fs');
// 递归创建文件夹，并在文件夹内创建文件
// fs.mkdir('tt/tt1/tt2', {
//     recursive: true
// }, err => {
//     fs.writeFile('tt/tt1/tt2/ll.txt', 'asdfasdf', e => {
//         fs.readdir('tt', (err, files) => {
//             console.log(files)
//         })
//     })
// })

// 读取文件夹
// fs.readdir("tt/tt1", function (err, files) {
//     if (err) {
//         return console.error(err);
//     }
//     files.forEach(function (file) {
//         console.log(file);
//     });
// });

// 删除文件夹
// fs.rmdir('tt', {
//     recursive: true // 递归删除，当文件夹不为空时会删除失败，需要加上
// }, e => {})

// 监听文件内容的变动
// fs.watchFile('t.txt', e => {
//     console.log(e)
// })

// 检测给定的路径是否存在。
// fs.exists('tt', e => {
//     console.log(e)
// })

// let zips = require('zlib');  // 引入node执行压缩相关操作的模块
// // 执行压缩
// // fs.createReadStream('./t.txt')
// //     .pipe(zips.createGzip())
// //     .pipe(fs.createWriteStream('./out.zip'))

// // 执行解压缩
// fs.createReadStream('./out.zip')
//     .pipe(zips.createGunzip())
//     .pipe(fs.createWriteStream('./out22.txt'))

// __filename 表示当前正在执行的脚本的文件名。
// 它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 
// 如果在模块中，返回的值是模块文件的路径。
// console.log(__filename)

// __dirname 表示当前执行脚本所在的目录。
// console.log(__dirname)

// process 是一个全局变量，即 global 对象的属性。
// 它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口
// console.log(process)
// process.env：返回一个对象，成员为当前 shell 的环境变量
// process.memoryUsage()：返回一个对象，描述了 Node 进程所用的内存状况，单位为字节
// nextTick(callback)：一旦当前事件循环结束，调用回调函数。
// 如：同一个函数内，需要one 执行完才执行callback，类似await
// functiondoSomething(args, callback) {
//     one(args);
//     process.nextTick(callback);
// }
// process.cwd()：返回当前进程的工作目录，C:\Users\EDZ\Desktop\LP\nodeJS
// process.argv：argv[0] 固定等于 NodeJS 执行程序的绝对路径，argv[1] 固定等于主模块的绝对路径


// 构建本地服务器，并解析请求参数
// var http = require("http");
// var url = require("url");  // 解析url所用模块

// http.createServer(function (request, response) {
//     response.writeHead(200, {
//         "Content-Type": "text/plain"
//     });
//     response.write("Hello World");

//     let path = url.parse(request.url);
//     console.log(path.pathname) // 文件路径，用来匹配路由
//     console.log(path.query) // 查询参数，无参数时为 null

//     // console.log(global) // node 中的全局对象
//     response.end();
// }).listen(8888);

// 接收 post 数据
// var http = require("http");
// var querystring = require('querystring');

// http.createServer((req, res) => {
//     var body = "";  // 暂存请求体的信息
//     req.on('data', function (chunk) {
//         body += chunk;  // 每当接受到请求体的数据，就累加到post变量中
//     });
//     req.on('end', () => {
//         body = querystring.parse(body);
//         console.log(body)
//     })
//     res.end()
// }).listen(6546)

// body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
// cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
// multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。

// $ cnpm install body-parser --save
// $ cnpm install cookie-parser --save
// $ cnpm install multer --save

// 一个模块中的 JS 代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。
// 之后，缓存起来的导出对象被重复利用。

// 使用包
// let pack = require('./pack');
// console.log(pack)
// pack.two()

// 文件扩展名的获取
// let path = require('path');
// console.log(path.extname('./1.js'))

// node 的事件触发
// var events = require('events');
// var Emitter = new events.EventEmitter();

// // on 函数用于绑定事件函数，emit 属性用于触发一个事件
// Emitter.on('ffff', (data) => {
//     console.log(data)
// })

// setTimeout(() => {
//     Emitter.emit('ffff', {
//         age: 9
//     })
// }, 2000)