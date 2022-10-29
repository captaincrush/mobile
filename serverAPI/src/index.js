const express = require('express')
const cors = require('cors')
const app = express()
// 跨域配置
app.use(cors())
// 使用中间件处理post数据存储到req.body
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// 使用日志中间件  中间件放在路由规则的上面
app.use(require('./middleware/logger'))
// 导入路由并使用
// /api/v1 标注api版本 为了不同客户端版本的兼容性
app.use('/api/v1', require('./router/goods'))
app.use('/api/v1', require('./router/users'))
app.listen(3000)
