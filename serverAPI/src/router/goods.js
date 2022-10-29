const express = require('express')
const router = express.Router()
// 导入模型
const GoodsModel = require('../models/goods')
// 测试清空方法
router.delete('/goods/all', (req, res) => {
  GoodsModel.remove({}).then((rs) => {
    console.log(rs)
    res.send('清空数据')
  })
})
// 商品数据操作
// 商品列表
router.get('/goods', (req, res) => {
  let response = {}
  // find({查询条件},{筛选条件})
  GoodsModel.find({}, { _id: 0, __v: 0 }).then((rs) => {
    // console.log(rs);
    response = {
      code: 0,
      msg: 'ok',
      data: rs
    }
    res.send(response)
  })
})
// 商品名称查询商品详情
router.get('/goods/:name', (req, res) => {
  let response = {}
  // find({查询条件},{筛选条件})
  GoodsModel.find({ name: req.params.name }, { _id: 0, __v: 0 }).then((rs) => {
    // console.log(rs);
    response = {
      code: 0,
      msg: 'ok',
      data: rs
    }
    res.send(response)
  })
})
// 添加商品
router.post('/goods', (req, res) => {
  let data = req.body
  let response = {}
  // post传递处理后的数据为对象 result结果
  GoodsModel.insertMany(data).then((rs) => {
    console.log(rs)
    if (rs.length > 0) {
      response = {
        code: 0,
        msg: 'ok',
        data: rs
      }
    } else {
      response = {
        code: 1,
        msg: '添加数据失败',
        data: []
      }
    }
    res.send(response)
  })
})
// 通过_id修改商品
router.put('/goods/:_id', (req, res) => {
  let data = req.body
  // update({查询条件},{修改信息})
  GoodsModel.updateOne({ _id: req.params._id }, { '$set': data }).then((rs) => {
    console.log(rs);
    response = {
      code: 0,
      msg: 'ok',
    }
    res.send(response)
  })
})
// 通过商品_id删除商品
router.delete('/goods/:_id', (req, res) => {
  let response = {}
  GoodsModel.deleteOne({_id:req.params._id}).then(rs=>{
    console.log(rs);
    if(rs.acknowledged){
      response = {
        code:0,
        msg:'ok'
      }
    }
    res.send(response)
  })
})
module.exports = router