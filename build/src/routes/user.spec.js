"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line node/no-unpublished-import
const request = require("supertest");
const environment_1 = require("../environment");
const app_1 = require("../app");
describe('Test the user route', () => {
    describe('PUT', () => {
        test('It should echo the new name', () => {
            return request(app_1.app)
                .put(`/user/${environment_1.default.credentials.test.existingUserID}`)
                .send({
                name: 'New Name',
            })
                .expect(200);
        });
        test('It should fail with an invalid payload', () => {
            return request(app_1.app)
                .put('/user/nonexisting')
                .send({
                lol: 'New Name',
            })
                .expect(400);
        });
        test('It should fail with a nonexisting ID', () => {
            return request(app_1.app)
                .put('/user/nonexisting')
                .send({
                name: 'New Name',
            })
                .expect(404);
        });
    });
});
//# sourceMappingURL=user.spec.js.map