// eslint-disable-next-line node/no-unpublished-import
import * as request from 'supertest';

import environment from '../../src/environment';
import {app} from '../../src/app';

describe('Test the user route', () => {
  describe('PUT', () => {
    test('It should echo the new name', () => {
      return request(app)
        .put(`/user/${environment.credentials.test.existingUserID}`)
        .send({
          name: 'New Name',
        })
        .expect(200);
    });
    test('It should fail with an invalid payload', () => {
      return request(app)
        .put('/user/nonexisting')
        .send({
          lol: 'New Name',
        })
        .expect(400);
    });
    test('It should fail with a nonexisting ID', () => {
      return request(app)
        .put('/user/nonexisting')
        .send({
          name: 'New Name',
        })
        .expect(404);
    });
  });
});
