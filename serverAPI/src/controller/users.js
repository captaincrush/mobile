/**
 *  控制器
 *  路由映射之后的业务处理
 *  调度模型处理数据操作
 *
 *
 */
// 导入user模型
const UserModel = require('../models/users')
// 签发和验证token
const jsonwebtoken = require('jsonwebtoken')
// 加密的串 随机字符串
const secret = 'hellokkoottuu'
const usersController = {
  register(req, res) {
    // 用户注册的信息
    let data = req.body
    // 判断用户已经存在[手机号或者用户名已经存在],则不注册
    UserModel.findOne({
      $or: [{ username: req.body.username }, { mobile: req.body.mobile }]
    })
      .then((rs) => {
        if (rs) {
          res.send({
            code: 2,
            msg: '请不要重复注册',
            data: {
              username: rs.username,
              mobile: rs.mobile,
              head_url: rs.head_url
            }
          })
        } else {
          UserModel.insertMany(data).then((rs) => {
            console.log(rs)
            if (rs.length > 0) {
              res.send({
                code: 0,
                msg: 'ok',
                data: {
                  username: rs[0].username,
                  mobile: rs[0].mobile,
                  head_url: rs[0].head_url
                }
              })
            } else {
              res.send({
                code: 1,
                msg: 'register error',
                data: {}
              })
            }
          })
        }
      })
      .catch((e) => {
        console.log(e)
      })
  },
  login(req, res) {
    let data = req.body
    UserModel.findOne(data).then((rs) => {
      if (rs) {
        res.send({
          code: 0,
          msg: 'ok',
          data: {
            username: rs.username,
            mobile: rs.mobile,
            head_url: rs.head_url,
            // token 登录成功之后 返回token
            // payload 参数  secret 密钥
            token: jsonwebtoken.sign(
              {
                uid: rs._id,
                expire: Math.ceil(new Date().getTime() / 1000) + 7200
              },
              // 加密的字符串  必须存储服务器端  不能发送给浏览器客户端
              secret
            )
          }
        })
      } else {
        res.send({
          code: 1,
          msg: '用户名|手机号或者密码错误',
          data: {}
        })
      }
    })
  },
  info(req,res){
    // 根据用户携带的token进行获取个人信息
  UserModel.findOne({ _id: req.payload.uid }).then((rs) => {
    if (rs) {
      res.send({
        code: 0,
        msg: 'ok',
        data: {
          username: rs.username,
          mobile: rs.mobile,
          head_url: rs.head_url,
          // token 登录成功之后 返回token
          // payload 参数  secret 密钥
          token: jsonwebtoken.sign(
            {
              uid: rs._id,
              expire: Math.ceil(new Date().getTime() / 1000) + 7200
            },
            // 加密的字符串  必须存储服务器端  不能发送给浏览器客户端
            secret
          )
        }
      })
    } else {
      res.send({
        code: 1,
        msg: '服务器错误~!',
        data: {}
      })
    }
  })
  }
}
module.exports = usersController
