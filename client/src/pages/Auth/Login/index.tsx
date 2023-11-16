// * Modules * //
import { ReactElement, useEffect, useRef } from "react";
import React, { useState } from "react";
import { Button, Popover, message } from "antd";
import { Link } from "react-router-dom";

// * Exports * //
import { ContainerSection, LogoImg, CardText, CardBanner } from "./index.styles"
import Head from "@/components/Head";
import { DivEffect } from "@/components/InitEffect";
import Logo from '@/assets/images/logo.png';
import api from "@/app/api";
import messageNotify from "@/components/Message/notify";


// * Components * //
export default function Login(): ReactElement {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [loadings, setLoadings] = useState<boolean>();

    const sendLogin = () => {
        messageNotify({
            content: "Carregando..", func: "loading", key: 'login'
        });

        setLoadings(true);
        api.post('/auth/login', {
            user: user,
            password: password
        })
            .then(response => {
                messageNotify({
                    content: "Logado com sucesso.", func: "success", key: 'login'
                });
            })
            .catch(error => {
                messageNotify({
                    content: "Usuario ou senha incorretos.", func: "error", key: 'login'
                });
            })
            .finally(() => {
                setTimeout(() => {
                    setLoadings(false)
                }, 1000);
            })
    }

    return (
        <React.Fragment>
            <Head title="Login" />
            <ContainerSection >
                <CardBanner >
                    <DivEffect>
                        <LogoImg src={Logo} alt="Icon Home" style={{ width: "48px", height: "46px" }} />
                    </DivEffect>
                    <img src="https://source.unsplash.com/random/?code,galaxy" alt="" className="w-full h-full opacity-50 object-cover" />
                </CardBanner>
                <CardText>
                    <div className="w-full h-100">
                        <DivEffect>
                            <React.Fragment>
                                <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Faça login na sua conta</h1>

                                <div className="mt-6">
                                    <div>
                                        <label className="block text-gray-500">Email ou Usuario:</label>
                                        <input type="text" name="User" id="user" value={user} onChange={(e: any) => setUser(e.target.value)} placeholder="Coloque seu email ou usuario" className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                                    </div>

                                    <div className="mt-4">
                                        <label className="block text-gray-500">Senha:</label>
                                        <input type="password" name="" value={password} onChange={(e: any) => setPassword(e.target.value)} placeholder="Coloque sua senha" className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500b
                                    focus:bg-white focus:outline-none" required />
                                    </div>

                                    <div className="text-right mt-2">
                                        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Esqueceu sua senha?</a>
                                    </div>
                                    <Button type="text"
                                        className="w-full h-12 block !bg-indigo-500 hover:!bg-indigo-400 focus:!bg-indigo-400 text-white font-semibold rounded-lg
                                        px-4 py-3 mt-6 hover:!text-white"
                                        loading={loadings}
                                        onClick={() => sendLogin()}
                                    >
                                        Entrar
                                    </Button>
                                </div>

                                <hr className="my-6 border-gray-300 w-full" />
                                <Popover title="Desativado no momento :(" >
                                    <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                                        <div className="flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use href="#a" overflow="visible" /></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg>
                                            <span className="ml-4">
                                                Acessar com
                                                Google</span>
                                        </div>
                                    </button>

                                </Popover>

                                <p className="mt-8">Não tem conta? <Link to="register" className="text-blue-500 hover:text-blue-700 font-semibold">Criar
                                    Conta</Link></p>


                            </React.Fragment>
                        </DivEffect>
                    </div>
                </CardText>

            </ContainerSection>
        </React.Fragment>
    )
}