// Import required modules
import express from 'express'
import { router } from './routes/router.js'

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', path.join(path.resolve(), 'src/views'))

app.use(router)

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
