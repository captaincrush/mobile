const jsonwebtoken = require('jsonwebtoken')
// 加密的串 随机字符串
const secret = 'hellokkoottuu'
const checkToken = (req, res, next) => {
  // 获取客户端传递token headers authorization
  let token = req.headers.authorization
  // 校验token是否有效
  try {
    // try里面的代码执行 报错不会直接输出 捕获
    let payload = jsonwebtoken.verify(token, secret)
    req.payload = payload
  } catch (e) {
    // e try里面报错 通过e接收
    console.log(e)
    res.send({
      code: 1,
      msg: 'token错误,请重新登录获取token'
    })
  }
  next()
}

module.exports = checkToken