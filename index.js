const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/bye', (req, res) => {
    res.send('Bye Bye World!')
  }) //this will not work as anything typed in the address bar will use GET method.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})