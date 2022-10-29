// mongoose连接mongodb
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/html2203')
// schema字段约束
const GoodsSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 1,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  num: {
    type: Number,
    defalut: 0
  }
})
// 模型创建
const GoodsModel = mongoose.model('Goods', GoodsSchema, 'goods')
module.exports = GoodsModel
