import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./auth.style";

export function Auth() {
    const [loadings, setLoadings] = useState<boolean>(false);
    const loc = useNavigate();

    const enterLoading = () => {
        setLoadings(true);

        setTimeout(() => {
            setLoadings(false);
            loc("/");
        }, 4000);
    };
    return (
        <Styled.Page>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <div className="form">
                        <h1>Criar Conta</h1>
                        <input type="text" placeholder="Name" />
                        <input type="user" placeholder="Usuario" />
                        <input type="password" placeholder="Senha" />
                        <button>Criar</button>
                    </div>
                </div>
                <div className="form-container sign-in-container">
                    <div className="form">
                        <h1>Faça o login</h1>
                        <br></br>
                        <input type="text" placeholder="Usuario" id="userInput" />
                        <input type="password" placeholder="Senha" id="senhaInput" />
                        <a href="#">Esqueceu sua senha?</a>
                        <button>Login</button>
                    </div>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Crie Sua Conta!</h1>
                            <p>Prencha as informações para criar seu usuario.</p>
                            <button
                                className="ghost"
                                id="signIn"
                                onClick={() => {
                                    document.getElementById("container")?.classList.remove("right-panel-active");
                                }}
                            >
                                Fazer Login
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Ola, Amigo!</h1>
                            <p>Faça o login para acessar o sistema. </p>
                            <button
                                className="ghost"
                                id="signUp"
                                onClick={() => {
                                    document.getElementById("container")?.classList.add("right-panel-active");
                                }}
                            >
                                Criar Conta
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Page>
    );
}
