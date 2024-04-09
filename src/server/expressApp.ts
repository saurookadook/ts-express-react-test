import path from 'path';

import express from 'express';
import { engine } from 'express-handlebars';

import homeRouter from './home';

const __dirname = path.resolve();

const expressApp = express();

expressApp.set('view engine', 'handlebars');
expressApp.engine(
    'handlebars',
    engine({
        layoutsDir: `${__dirname}/views`,
    }),
);
expressApp.set('views', path.join(__dirname, './views'));

expressApp.use('/', homeRouter);

export default expressApp;
