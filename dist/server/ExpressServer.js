"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bodyParser = require('body-parser'); // import cors


/**
 *  Example of using ES6 syntectic sugar to create Express JS server
 */
var ExpressServer = /*#__PURE__*/_createClass(function ExpressServer() {
  var _this = this;

  _classCallCheck(this, ExpressServer);

  _defineProperty(this, "initServer", function () {
    //Create Server
    _this.server = (0, _express["default"])();

    _this.server.use(bodyParser.json()); // for parsing application/json


    _this.server.use(bodyParser.urlencoded({
      extended: true
    })); // for parsing application/x-www-form-urlencoded
    // use cors


    _this.server.use((0, _cors["default"])());

    _this.server.get('/user', function (req, res) {
      res.send('Got a GET request at /user'); // next()
    });

    _this.server.get('/dummycar', function (req, res) {
      var somecar = {
        "name": "Mach 5",
        "driver": "Speed Racer"
      };
      res.send(somecar); // next()
    }); //get endpoint for batman


    _this.server.get('/batman', function (req, res) {
      var batman = {
        "name": "Batman",
        "realname": "Bruce Wayne"
      };
      res.send(batman); // next()
    });

    _this.server.put('/user', function (req, res) {
      res.send('Got a PUT request at /user'); // next()
    });

    _this.server["delete"]('/user', function (req, res) {
      res.send('Got a DELETE request at /user'); // next()
    });

    _this.server.post('/', function (req, res, next) {
      console.log(req); // next()
    }); //post endpoint for batman


    _this.server.post('/postexample', function (req, res) {
      //console.log(req);
      console.log(req.body);
      var responseObject = {
        "msg": "Got a POST request at /postexample",
        "body": req.body
      };
      res.send(responseObject);
    }); //post to add two numbers


    _this.server.post('/add', function (req, res) {
      //console.log(req);
      console.log(req.body);
      var responseObject = {
        "msg": "Got a POST request at /add",
        "body": req.body,
        "result": req.body.num1 + req.body.num2
      };
      res.send(responseObject);
    });

    _this.server.get('/', function (req, res) {
      res.send('Hello World from EXPRESS SERVER!'); // next()
    }); //Start Listening


    _this.server.listen(process.env.PORT || 3000, function () {
      console.log("".concat(_this.serverName, " and  Started at port ").concat(process.env.PORT || 3000));
    });
  });

  this.serverName = 'Express Server API'; //Auto Start Server

  this.initServer();
}); //EXPORT MODULE


module.exports = ExpressServer;