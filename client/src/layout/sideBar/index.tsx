// * Modules * //
import Image from "next/image";

// * Exports * //
import * as S from "./sideBar.styles"
import Icon from "@/assets/images/logo.png";
import BackgroundSideBar from "@/assets/svg/backgroundSideBar";

// * Components * //
export default function SideBarLayout() {

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
                                <h3 className="font-bold text-slate-400 tracking-widest">Finance</h3>
                            </div>
                        </div>


                    </div>
                    <div className="flex">Teste3</div>

                </S.Content>
            </S.Header>
            <div className="w-full h-16 text-slate-100 flex justify-center ">
                <h1 className="text-2xl px-3 mt-3 font-semi w-full max-w-7xl tracking-wide">Bem vindo de volta, João Roberto !</h1>
            </div>
        </S.SideBar>
    )
}