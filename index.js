const app = require('./app')
const http = require('http')
const config = require('./utils/config')

const server = http.createServer(app)

app.get('/', (request, response) => {
    response.send(`
      <p>Server is running on port ${config.PORT}</p>
    `)
})

server.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`)
})