import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import { profileController } from '../controllers/profiles.js';

const app = express();

app.use(express.json());
app.use(profileController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
