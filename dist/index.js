"use strict";

var _ExpressServer = _interopRequireDefault(require("./server/ExpressServer"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import {http} from 'http'
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);
_dotenv["default"].config(); //Start Express JS Server


var expressServer = new _ExpressServer["default"](); //for api server style