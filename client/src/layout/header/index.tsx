// * Modules * //
import Image from "next/image";
import { usePathname, useSearchParams } from 'next/navigation'
import Link from "next/link";

// * Exports * //
import * as S from "./sideBar.styles"
import Icon from "@/assets/images/logo.png";
import BackgroundSideBar from "@/assets/svg/backgroundSideBar";
import { Button } from "antd";
import DropdownUser from "@/components/DropdownUser";

// * Components * //
const MenuList: any = [
    {
        name: 'Dashboard',
        route: '/app'
    },
    {
        name: 'Histórico',
        route: '/app/historico'
    },
    {
        name: 'Configurações',
        route: '/app/configuracoes'
    },
];

export default function HeaderBarLayout() {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <S.SideBar>
            <S.Back>
                <BackgroundSideBar />
            </S.Back>
            <S.Header>
                <S.Content>
                    <div className="flex w-3/5">
                        <div className="flex ">
                            <Image src={Icon} alt="Icon Home" style={{ width: "46px", height: "46px" }} className="saturate-50" />
                            <span className="bg-slate-600 bg-opacity-50 ml-1 mr-2" style={{ width: "1px" }} />
                            <div className="h-full mt-1.5">
                                <h2 className="font-semibold tracking-wider leading-4">Rock</h2>
                                <h3 className="font-bold text-slate-200 tracking-widest">Finance</h3>
                            </div>
                        </div>
                        <S.Menu>
                            {
                                MenuList.map((element: any, i: number) => (
                                    <Link href={element.route} key={i}>
                                        <li
                                            className={`buttonGradient ${pathname == element.route ? "active " : ""} px-5 py-2 rounded-xl`}
                                        >
                                            {element.name}
                                        </li>
                                    </Link>
                                ))
                            }


                        </S.Menu>


                    </div>
                    <div className="flex gap-5">
                        <Button
                            className="w-10 h-10 bg-slate-500 bg-opacity-50 rounded-full"
                        >
                            A
                        </Button>
                        <DropdownUser />
                    </div>

                </S.Content>
            </S.Header>
            <div className="w-full h-16 text-slate-100 flex justify-center ">
                <h1 className="text-2xl px-3 mt-5 font-semi w-full max-w-7xl tracking-wide">Bem vindo de volta, <b>João Roberto </b>!</h1>
            </div>
        </S.SideBar>
    )
}