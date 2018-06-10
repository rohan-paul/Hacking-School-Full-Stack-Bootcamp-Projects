const express = require('express')
const app = express()

const fs = require('fs');
const https = require('https');

// With the below setup I will have https in localhost instead of http. And for that, I am first 
const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
}

const server = https.createServer(httpsOptions, app).listen(3000, () => {
  console.log('Server running at 3000');
})

app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(3000, () => console.log('Example app listening on port 3000!'))