// * Modules * //
import { motion } from "framer-motion";
import { Button } from "antd";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

// * Exports * //
import * as S from "./navBar.styles";
import DropdownUser from "../DropdownUser";
import { LI_VARIANT, UL_VARIANT } from "../../functions/json/animationLoader";
import { DivEffect } from "../InitEffect";
import BackgroundSideBar from "../../assets/svg/backgroundSideBar";
import Icon from '../../assets/images/logo.png';
import { useContext } from "react";
import { AuthContext } from "@/app/context/authContext";

// * Components * //
const MenuList: any = [
    {
        name: 'Dashboard',
        route: '/dashboard'
    },
    {
        name: 'Histórico',
        route: '/dashboard/historico'
    },
    {
        name: 'Categorias',
        route: '/dashboard/categorias'
    },
];

export default function HeaderBarLayout() {
    const { pathname }: any = useLocation();
    const { userInfo } = useContext(AuthContext);

    return (
        <S.SideBar className={pathname == '/dashboard' ? "" : "h-20"} >
            < S.Back >
                <BackgroundSideBar isHome={pathname == '/dashboard' ? true : false} />
            </S.Back >
            <S.Header>
                <S.Content>
                    <div className="flex w-3/5">
                        <DivEffect>
                            <div className="flex ">
                                <img src={Icon} alt="Icon Home" style={{ width: "46px", height: "46px" }} className="saturate-50" />
                                <span className="bg-slate-600 bg-opacity-50 ml-1 mr-2" style={{ width: "1px" }} />
                                <div className="h-full mt-1.5">
                                    <h2 className="font-semibold tracking-wider leading-4">Rock</h2>
                                    <h3 className="font-bold text-slate-200 tracking-widest">Finance</h3>
                                </div>
                            </div>
                        </DivEffect>
                        <S.Menu>
                            <motion.ul
                                className="flex gap-5"
                                initial="hidden"
                                animate="visible"
                                variants={UL_VARIANT}

                            >
                                {
                                    MenuList.map((element: any, i: number) => (
                                        <Link to={element.route} key={i}>
                                            <motion.li className={`buttonGradient ${pathname == element.route ? "active " : ""} px-5 py-2 rounded-xl`}
                                                variants={LI_VARIANT}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                {element.name}

                                            </motion.li>

                                        </Link>
                                    ))
                                }
                            </motion.ul>


                        </S.Menu>


                    </div>
                    <div className="flex gap-5">
                        <DropdownUser />
                    </div>

                </S.Content>
            </S.Header>
            {
                pathname == '/dashboard' ? <>
                    <DivEffect>
                        <div className="w-full h-16 text-slate-100 flex justify-center ">
                            <h1 className="text-2xl px-3 mt-5 font-semi w-full max-w-7xl tracking-wide">Bem vindo de volta, <b>{userInfo.name ? userInfo.name : '--'}</b>!</h1>
                        </div>
                    </DivEffect>
                </> : <></>
            }
        </S.SideBar >
    )
}
