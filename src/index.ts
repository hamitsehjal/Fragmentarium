import express, { Express, Request, Response } from "express";

import "dotenv/config";

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to RapidTools Hub!!');
})
app.listen(port, () => {
    console.log(`Express Server running on PORT: ${port}`);
})