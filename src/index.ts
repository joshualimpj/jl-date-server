import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
    'credentials': true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser());

const server = http.createServer(app);

app.get("/", async (req, res) => {return res.sendStatus(200)});

server.listen(8080, () => {
    console.log(`Server running on http://localhost:8080 ${new Date()} production-${process.env.PROD}`)
});