
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// * Configurations
dotenv.config();

const app: Express = express()
const port: any = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.end('qweqwe')
})


app.listen(port, () => {
    console.log(`Server corriendo en ${port}`)
})

