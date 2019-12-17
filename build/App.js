"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Application = /** @class */ (function () {
    function Application() {
    }
    Object.defineProperty(Application, "getInstance", {
        get: function () {
            if (!Application.instance) {
                Application.instance = express_1.default();
            }
            return Application.instance;
        },
        enumerable: true,
        configurable: true
    });
    return Application;
}());
exports.Application = Application;
