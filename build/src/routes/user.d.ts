import { Response, Route } from 'typera-express';
interface User {
    name: string;
}
declare const updateUser: Route<Response.Ok<User> | Response.NotFound | Response.BadRequest<string>>;
export { updateUser };
