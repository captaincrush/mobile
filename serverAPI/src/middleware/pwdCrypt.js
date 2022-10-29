/**
 *  加密密码
 *
 */
// 字符串加密
const md5 = require('md5')
const pwdCrypt = (req, res, next) => {
  // 获取源密码
  let password = req.body.password
  // 加密密码  salt加盐机密  加入一些额外的字符串
  password = md5(md5(password).slice(6, 12))
  // console.log(password)
  // console.log(password.length)
  // 将加密密码重新存回去
  req.body.password = password
  next()
}
module.exports = pwdCrypt
