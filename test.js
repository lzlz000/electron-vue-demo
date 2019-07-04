// 测试node功能的代码 随便改 无意义
const path = require('path')
const url = require('url')

const t = url.format({
  pathname: path.join(__dirname, '../dist/index.html'),
  protocol: 'file:',
  slashes: true
})

console.log(t);