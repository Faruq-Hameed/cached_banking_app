import express, { Express, NextFunction, Request, Response } from "express";
// import dotenv from "dotenv";
// import { config } from "./config";
//import routes from "./routes";
// dotenv.config();
import {CustomError} from './utils/Errors';

const app: Express = express();
const port = process.env.PORT || 3000;

// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.get("/", (req: Request, res: Response) => {
    res.status(200).send('Welcome to the Node.js Cache and Performance App')
});


// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
    const err: CustomError = new Error('Not Found')
    err.status = 404
    res.send('Route not found')
    next(err)
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

module.exports = app