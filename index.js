import "dotenv/config";
import express from "express";
import cors from "cors";
import winston from "winston";

//configuração do log
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${message}`;
});

global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "petshop-api.log" })
    ],
    format:combine(
        label({ label: "petshop-api" }),
        timestamp(),
        myFormat
    )
});

//importação das rotas


//criação da instancia do express
const app = express();

//habilitar o express para trabalhar com json
app.use(express.json());

//habilitar a liberação de cors
app.use(cors());

//configurar o handdler de erro
app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseURL} - ${err.message}`);
    res.status(400).send({ error: err.message });
});

//configuração da porta padrão da api
app.listen(process.env.PORT, () => {
    console.log(`API started in http://localhost:${process.env.PORT}`);
})