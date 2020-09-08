import * as express from 'express';
import * as bodyParser from 'body-parser';
import {router} from 'typera-express';

import {updateUser} from './routes/user';

const app = express();
app.use(bodyParser.json());
app.use(router(updateUser).handler());

export {app};
