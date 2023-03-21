import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

// * Exports * //
import routerRockFinance from './services/RockFinance/routes';

// * Component * //
const App = express();

// ? Configs

dotenv.config();
App.use(express.json());
App.use(cors());
App.use(express.static(path.join(__dirname, 'public')));

// ? Routes Services
App.use('/RockFinance', routerRockFinance);

App.use((req, res) => {
    res.status(404).json({
        status: 'Not Found',
        message: 'Nenhuma Requisição Encontrada'
    })
})

// ? Running Server
App.listen(process.env.PORT_SERVER, () => console.log(`Servidor Rodando: http://localhost:${process.env.PORT_SERVER}`));