// * Modules * //
import React, { ReactElement, useState } from 'react'
import { Button, Popover } from "antd";

// * Exports * //
import { DivEffect } from "../../../components/InitEffect";


// * Components * //
export function FormRegister(props: { functionMail: () => void }): ReactElement {
    const [loadings, setLoadings] = useState<boolean[]>([]);

    const enterLoading = (index: number) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });

        setTimeout(() => {
            props.functionMail();
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 3000);
    };
    return (
        <DivEffect>
            <React.Fragment>
                <h1 className="text-2xl md:text-4xl font-bold leading-tight mt-12">Faça seu cadastro:</h1>
                <p className="w-full mt-2">
                    Coloque todas as informações para continuar o cadastro.
                </p>
                <form className="mt-6 pb-4" action="#" method="POST">
                    <div>
                        <label className="block text-gray-700">Email:</label>
                        <input type="email" name="Email" id="" className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Usuário:</label>
                        <input type="text" name="User" id="" className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-700">Senha:</label>
                        <input type="password" name="password" id="" className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500b
                    focus:bg-white focus:outline-none" required />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Confirmar Senha:</label>
                        <input type="password" name="repeat-password" id="" className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500b
                    focus:bg-white focus:outline-none" required />
                    </div>

                    <hr className="my-6 border-gray-300 w-full" />
                    <Button type="text" className="w-full h-12 block !bg-indigo-500 hover:!bg-indigo-400 focus:!bg-indigo-400 text-white font-semibold rounded-lg
                    px-4 py-3 mt-6 hover:!text-white"
                        loading={loadings[1]}
                        onClick={() => enterLoading(1)}
                    >
                        Continuar
                    </Button>
                </form>



            </React.Fragment>
        </DivEffect>
    )
}