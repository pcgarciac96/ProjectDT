import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from '../routes';

const app = express();
app.use(morgan("dev"), cors(), express.json());
app.use("/api",routes);

export default app;