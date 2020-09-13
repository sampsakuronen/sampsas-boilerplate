import * as express from 'express';
import * as bodyParser from 'body-parser';
import {router} from 'typera-express';
import * as helmet from 'helmet';

import {updateUser} from './routes/user';

const app = express();
app.use(bodyParser.json());
app.use(helmet({contentSecurityPolicy: false})); // TODO: Change the CSP to match your needs.
app.use(router(updateUser).handler());

export {app};
