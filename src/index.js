// import {http} from 'http'

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);
import ExpressServer from "./server/ExpressServer"
import dotenv from "dotenv"
dotenv.config()

//Start Express JS Server
const expressServer = new ExpressServer(); //for api server style
