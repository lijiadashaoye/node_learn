var ws = require("nodejs-websocket");

ws.createServer(function(conn) {
    conn.on("text", function(str) {
        console.log("收到的信息为:" + str)
        conn.send("收到的信息为:" + str)
    })
    conn.on("close", function(code, reason) {
        console.log("关闭连接")
    });
    conn.on("error", function(code, reason) {
        console.log("异常关闭")
    });
}).listen(4444);