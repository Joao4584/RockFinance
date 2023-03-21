import { Router } from "express";
import { renderRouterElement } from "../../middlewares/renderRouterElement";

const routerRockFinance = Router();



routerRockFinance.get('/', (req , res) => {
    res.sendFile(renderRouterElement('RockFinance/index.html'));
})

export default routerRockFinance;