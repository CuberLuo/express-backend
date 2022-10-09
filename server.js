const express = require('express')
const app = express()

// 解决跨域问题
app.all('*', function (req, res, next) {
  // 设置允许跨域的域名,*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*')
  // 允许的header类型
  res.header('Access-Control-Allow-Headers', 'content-type')
  // 跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS')
  if (req.method.toLowerCase() == 'options')
    res.sendStatus(200) // 让options 尝试请求快速结束
  else next()
})

// 后端请求拦截器
app.use((request, response, next) => {
  console.log('请求接口:', request.url)
  next()
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
  const res = {
    code: 10000,
    msg: 'Hello World!',
    data: null
  }
  response.send(res)
})

app.get('/test', (request, response) => {
  const res = {
    code: 10000,
    msg: 'Test',
    data: null
  }
  response.send(res)
})

app.post('/user/register', (request, response) => {
  console.log(request.body.username)
  console.log(request.body.password)
  const res = {
    code: 0,
    msg: '注册成功',
    data: null
  }
  response.send(res)
})

app.post('/user/login', (request, response) => {
  console.log(request.body.username)
  console.log(request.body.password)
  const res = {
    code: 0,
    msg: '登录成功',
    data: null
  }
  response.send(res)
})

const PORT = 3000
app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running on port ${PORT}`)
    console.log(`http://localhost:${PORT}`)
  }
})
