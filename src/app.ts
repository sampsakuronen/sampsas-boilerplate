import * as express from 'express';
import * as bodyParser from 'body-parser';
import {router} from 'typera-express';
import * as helmet from 'helmet';
import * as compression from 'compression';

import {updateUser} from './routes/user';

const app = express();

app.use(bodyParser.json());
app.use(compression());
app.use(helmet({contentSecurityPolicy: false})); // TODO: Change the CSP to match your needs.

app.use(router(updateUser).handler());

export {app};
