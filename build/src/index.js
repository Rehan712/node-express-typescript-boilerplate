"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./App");
var AppRouter_1 = require("./AppRouter");
var router = AppRouter_1.AppRouter.getInstance();
exports.router = router;
exports.default = App_1.Application.getInstance;
