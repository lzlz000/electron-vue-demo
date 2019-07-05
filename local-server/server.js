// 启用一个express本地服务器

const express = require('express');
const app = express();
 
// 设置允许跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.get('/', function (req, res) {
   res.send({msg:'hello world'});
})
 
let localServer = () => {
  var server =app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
   
  })
}

module.exports =  localServer;