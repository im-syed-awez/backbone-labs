// We are making a http server(API server)

// Its a build-in http-package in node called http
const http = require("http");

//there is createSerrver() which creates a web-server for us.
// for which particular request, what needs to happen, we have to create a handler() to process incoming reqs
// In the 1st req-arg it will pull an object, which consist of all the info of req(who is the user, its ip, what is the req for, all the meta-data of client, is in that object) and send a response we can send it using res-arg

const myServer = http.createServer((req, res) => {
    console.log("Received a req");
    res.end("Hello from Server");
});

// we have to provide a port no. to our server to listen the incoming req and send the res. with the help of listen(). If the is listening on that port then display a msg to confirm 
myServer.listen(8000, () => console.log("Server is running on http://localhost:8000"));

// It is a good habbit to create a start script in p.json under scripts: "start": "node name_of_exe_file"