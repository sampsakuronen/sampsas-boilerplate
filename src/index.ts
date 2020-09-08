import environment from './environment';

import {app} from './app';

app.listen(environment.port, () => console.log('Listening'));
