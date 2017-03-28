import express from 'express'

import routeHandlers from './route'

const app = express()

const port = process.env.PORT || 3000

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`listen: ${port}`)
  }
})

app.use('/api', routeHandlers)
