 - 1. app-https-in-localhost.js - Here I am implementing https in localhost instead of http, by first creating a  self-signed key and certificate pair with OpenSSL  in the root of the project

 - 2. app.js - With this file, I am implementing, nodemailer to send automatied emails. However, note that, because I dont have a TLS (TLS is a successor to Secure Sockets Layer protocol, or SSL.) certificate - so to start the server, I have run the below command - 

			``NODE_TLS_REJECT_UNAUTHORIZED=0 nodemon app.js``