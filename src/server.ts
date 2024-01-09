// * Modules * //
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";

// * Exports * //
import routes from "./routes/api";

// * Component * //
const App = express();

// ? Configs 
dotenv.config();
App.use(express.json());
App.use(cors());
App.use(bodyParser.urlencoded({ extended: true }));

App.use(express.static(path.join(__dirname, "../client/out")));

// ? Routes Services
App.use("/", routes);

// ? Running Server
App.listen(process.env.PORT_SERVER, () => console.log(`Servidor Rodando: http://localhost:${process.env.PORT_SERVER}`));