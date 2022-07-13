import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import { authorization } from './controller/authorization';
import { hasAuth } from './middleware/hasAuth';
import index from './routes/index';

const app = express();
app.set('port', process.env.PORT || 4000);
dotenv.config();

const corsOptions = {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
    allowedHeaders: '*'
};

// check later if cors is setup
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded());

app.get('/authorization', authorization);
app.use(hasAuth, index);

export default app;
