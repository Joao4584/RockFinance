import * as Styled from "./menu.style";
import { Navegation } from "../../Components/Navegation";
import { MenuRoutes } from "../../Routes/menu.routes";

export function Menu() {
    return (
        <Styled.Menu>
            <Styled.Container>
                <MenuRoutes />
            </Styled.Container>
            <Navegation />
        </Styled.Menu>
    );
}
