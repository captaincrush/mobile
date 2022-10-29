/***
 *  操作用户表的相关方法
 *
 *
 */
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/html2203', (err) => {
  if (err === null) {
    console.log('mongodb连接成功')
  }
})
// 定义表约束和结构
const UserSchema = new mongoose.Schema({
  // 用户名  username
  username: {
    type: String,
    // required: true,
    minlength: 2,
    maxlength: 10
  },
  // 密码    password
  password: {
    type: String,
    required: true,
  },
  // 手机    mobile
  mobile: {
    type: String,
    required: true,
    minlength: 11,
    maxlength: 11
  },
  // 头像    head_url  url地址
  head_url: {
    type: String,
    // required: true
  }
})
// 创建模型
const UserModel = mongoose.model('User', UserSchema, 'users')

module.exports = UserModel