"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastShip = void 0;
var Ship_1 = require("./Ship");
var FastShip = /** @class */ (function (_super) {
    __extends(FastShip, _super);
    function FastShip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FastShip.prototype.canDeliver = function (planet, cargo) {
        return this.fuel >= planet.distance * 0.8 && this.capacity >= cargo.weight;
    };
    return FastShip;
}(Ship_1.Ship));
exports.FastShip = FastShip;
