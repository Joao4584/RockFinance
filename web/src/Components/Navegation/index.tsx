import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    HiAdjustmentsHorizontal,
    HiNewspaper,
    HiCalendarDays,
    HiSquares2X2,
    HiPresentationChartLine,
} from "react-icons/hi2";

import * as Styled from "./natigation.style";

const LinkPage = [
    {
        href: "/info",
        svg: <HiNewspaper />,
    },
    {
        href: "/calendar",
        svg: <HiCalendarDays />,
    },
    {
        href: "/",
        svg: <HiSquares2X2 />,
    },
    {
        href: "/chart",
        svg: <HiPresentationChartLine />,
    },
    {
        href: "/options",
        svg: <HiAdjustmentsHorizontal />,
    },
];

export function Navegation() {
    const location = useLocation();

    const searchParams = () => {
        const items = Array.from(document.getElementById("modal-link")?.children || []);
        if (items) {
            items.forEach((element) => {
                const linkElement = element as HTMLAnchorElement;
                if (linkElement.pathname == location.pathname) {
                    linkElement.classList.add("active");
                } else {
                    linkElement.classList.remove("active");
                }
            });
        }
    };

    useEffect(() => {
        searchParams();
    }, [location.pathname]);

    return (
        <Styled.Navigation>
            <ul className="nav-bar" id="modal-link">
                {LinkPage.map((element, index) => (
                    <Link to={element.href} key={index}>
                        <li>{element.svg}</li>
                    </Link>
                ))}
            </ul>
        </Styled.Navigation>
    );
}
