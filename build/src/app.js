"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express = require("express");
const bodyParser = require("body-parser");
const typera_express_1 = require("typera-express");
const user_1 = require("./routes/user");
const app = express();
exports.app = app;
app.use(bodyParser.json());
app.use(typera_express_1.router(user_1.updateUser).handler());
//# sourceMappingURL=app.js.map