"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var loginRoutes_1 = require("./routes/loginRoutes");
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ["ksdfaslkdjf"] }));
app.get("/", function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n    <div>\n        <h1>Hi therer</h1>\n    </div>\n");
    }
    else {
        res.send("\n    <div>\n        <h1>You are not looged in</h1>\n    </div>\n");
    }
});
app.use("/", loginRoutes_1.router);
app.listen(3000, function () { return console.log("server is listening on port 3000"); });
