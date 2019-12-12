"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(400).send("Not Permitted");
}
var router = express_1.Router();
exports.router = router;
router.get("/login", function (req, res) {
    res.send("\n        <form method=\"POST\">\n            <div>\n                <label>Email</label>\n                <input name=\"email\" />\n            </div>\n            <div>\n                <label>Password</label>\n                <input name=\"password\" />\n            </div>\n            <button>Submit</button>\n        </form>\n    ");
});
router.post("/login", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email &&
        password &&
        email === "rehan@gmail.com" &&
        password === "12345") {
        req.session = { loggedIn: true };
        res.redirect("/");
    }
    else {
        res.json({ email: email, password: password });
    }
});
router.get("/protected", requireAuth, function (req, res) {
    res.send("welcome to protected Route");
});
router.get("/logout", function (req, res) {
    req.session = undefined;
    res.redirect("/");
});
