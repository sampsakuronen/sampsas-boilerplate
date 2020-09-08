"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const t = require("io-ts");
const typera_express_1 = require("typera-express");
const environment_1 = require("../environment");
const userBody = t.type({ name: t.string });
const updateUser = typera_express_1.route('put', '/user/', typera_express_1.URL.str('id'))(typera_express_1.Parser.body(userBody))(async (request) => {
    if (environment_1.default.test &&
        request.routeParams.id === environment_1.default.credentials.test.existingUserID) {
        return typera_express_1.Response.ok({ name: request.body.name });
    }
    return typera_express_1.Response.notFound();
});
exports.updateUser = updateUser;
//# sourceMappingURL=user.js.map