const moment = require('moment')
const fs = require('fs')
const path = require('path')
const logger = (req,res,next)=>{
  // 1、获取日志记录的信息 ip 时间 请求类型  请求url地址  客户端信息
  const ip = req.ip
  // 2022-09-01 09:28:23  momentjs处理时间
  const time = moment().format('YYYY-MM-DD HH:mm:ss')
  const date = moment().format('YYYYMMDD')
  const method = req.method
  const url = req.url
  const agent = req.headers['user-agent']
  const text = `${ip} "${time}" "${method} - ${url}" "${agent}"\n`
  // console.log(text);
  // 2、将信息写入文件
  const logPath = path.join(__dirname,'../logs',date+'.log')
  fs.appendFile(logPath,text,(err)=>{
    console.log(err);
  })
  // console.log(req);
  next()
}

module.exports = logger