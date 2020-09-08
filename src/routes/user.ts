import * as t from 'io-ts';
import {Parser, Response, Route, URL, route} from 'typera-express';

import environment from '../environment';

interface User {
  name: string;
}

const userBody = t.type({name: t.string});

const updateUser: Route<
  Response.Ok<User> | Response.NotFound | Response.BadRequest<string>
> = route('put', '/user/', URL.str('id'))(Parser.body(userBody))(
  async request => {
    if (
      environment.test &&
      request.routeParams.id === environment.credentials.test.existingUserID
    ) {
      return Response.ok({name: request.body.name});
    }

    return Response.notFound();
  }
);

export {updateUser};
