/**
 *  user 接口
 *  注册  /api/v1/register POST类型
 *  登录  /api/v1/login    POST类型
 *  个人信息 /api/v1/user  GET类型  用户id通过token获取
 */
const express = require('express')
const router = express.Router()

// 加密中间件
const pwdCrypt = require('../middleware/pwdCrypt')
// 导入token校验中间件
const checkToken = require('../middleware/checkToken')

// 控制器导入
const usersController = require('../controller/users')
// 注册  使用密码加密的自定义中间件
router.post('/register', pwdCrypt, (req, res) => {
  usersController.register(req, res)
})
// 登录 使用密码加密中间件  密码加密不可逆的  校验密码需要加密之后对比
router.post('/login', pwdCrypt, (req, res) => {
  usersController.login(req, res)
})
// 查询个人信息 token
// 先校验token有效性  自定义中间件
router.get('/user', checkToken, (req, res) => {
  usersController.info(req, res)
})
module.exports = router
