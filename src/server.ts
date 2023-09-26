import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import routes from "./routes";

// * Exports * //

// * Component * //
const App = express();

// ? Configs 
dotenv.config();
App.use(express.json());
App.use(cors());

App.use(express.static(path.join(__dirname, "../client/out")));

// ? Routes Services
App.use("/", routes);

// ? Running Server
App.listen(process.env.PORT_SERVER, () => console.log(`Servidor Rodando: http://localhost:${process.env.PORT_SERVER}`));