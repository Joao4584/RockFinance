// * Modules * //
import { ReactElement } from "react";
import React, { useState } from "react";

// * Exports * //
import { DivEffect } from "@/components/InitEffect";
import { FormRegister } from "./form";
import { CardUserMail } from "@/components/CardUserMail";
import Head from "@/components/Head";
import Logo from "@/assets/images/logo.png";

// * Components * //
export default function Register(): ReactElement {
    const [formComponent, setFormComponent] = useState(<FormRegister functionMail={() => sendEmail()} />);
    const sendEmail = () => {
        setFormComponent(<CardUserMail id={1} sizeNumbers={5} info="RegisterPage" />);
    }

    return (
        <section className="flex flex-row-reverse h-screen items-center">
            <Head title="Registrar" />
            <div className="bg-blue-900 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-full">
                <DivEffect>
                    <img src={Logo} alt="Icon Home" style={{ width: "48px", height: "46px" }} className="absolute top-5 right-6 opacity-100 z-50 saturate-50" />
                </DivEffect>
                <img src="https://source.unsplash.com/random/?code,galaxy" alt="" className="w-full h-full opacity-50 object-cover" />
            </div>

            <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-2/3 h-full px-6 lg:px-16 xl:px-12
                flex items-center justify-center">

                <div className="w-full h-full">
                    {formComponent}
                </div>
            </div>

        </section>
    )
}