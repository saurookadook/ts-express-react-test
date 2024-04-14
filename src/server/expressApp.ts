import path from 'path';

import express from 'express';
import { engine } from 'express-handlebars';

import homeRouter from './home';

const __dirname = path.resolve();
console.log('\n'.padStart(220, '='), `dirname: ${__dirname}`, '\n'.padEnd(220, '='));

const expressApp = express();

expressApp.set('view engine', 'handlebars');
expressApp.engine(
    'handlebars',
    engine({
        layoutsDir: `${__dirname}/src/server/views`,
    }),
);
expressApp.set('views', path.join(__dirname, 'src/server/views'));

if (process.env.ENV !== 'production') {
    expressApp.use('/dist', express.static(path.join(__dirname, 'dist')));
}

expressApp.use('/', homeRouter);

export default expressApp;
