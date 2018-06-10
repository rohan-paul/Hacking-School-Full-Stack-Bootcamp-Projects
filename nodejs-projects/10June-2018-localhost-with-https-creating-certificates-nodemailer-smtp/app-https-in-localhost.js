/*Here I am implementing https in localhost instead of http

A> First I have to create a  self-signed key and certificate pair with OpenSSL - in the root of the project that I am building. So these key and certificate files are project specific.

< openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365 >

Then run the below 

< openssl rsa -in keytmp.pem -out key.pem >

Follow this tutorial to get more understanding on what the above command is doing

https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-apache-in-ubuntu-16-04

C> The commands will generate the 2 key and certificate files in the project root - which I will need to pass as httpsOptions to https.createServer

*/

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

// commenting the below line out which is the regular line for listening to the port after launching the server normally with http
// app.listen(3000, () => console.log('Example app listening on port 3000!'))