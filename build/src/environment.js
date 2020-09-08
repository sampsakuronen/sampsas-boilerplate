"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
exports.default = {
    port: parseInt(process.env.PORT),
    test: Boolean(process.env.TEST),
    credentials: {
        test: {
            existingUserID: 'exists',
        },
    },
};
//# sourceMappingURL=environment.js.map