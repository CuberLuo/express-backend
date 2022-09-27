const express = require('express')
const app = express()
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

const PORT = 3000
app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running on port ${PORT}`)
    console.log(`http://localhost:${PORT}`)
  }
})
