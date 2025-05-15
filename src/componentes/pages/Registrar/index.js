import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from '../../imagens/logo.png'

const Label = styled.label`
    // color: #ffffff;
`

const H5 = styled.h5`
    // color: #ffffff
`

const Moldura = styled.div`
    padding: 20px;
    width: 300px;
`;

const Img = styled.img`
    width: 200px;
`;

const Div = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default function Registrar(){
    return(
        <div className="container-sm">
                <div className="row justify-content-center mt-5 text-center">
                    <Moldura>
                        <Img src={Logo}></Img>
                        <form>
                            <div className="mb-3">
                                <Label htmlFor="nome" className="form-label">Nome</Label>
                                <input type="text" className="form-control" id="nome" name="nome" placeholder="Digite seu nome"/>
                            </div>
                            <div className="mb-3">
                                <Label htmlFor="email" className="form-label">E-mail</Label>
                                <input type="text" className="form-control" id="email" name="email" placeholder="Digite seu email"/>
                            </div>
                            <div className="mb-3">
                                <Label htmlFor="senha" className="form-label">Senha</Label>
                                <input type="password" className="form-control" id="senha" name="senha" placeholder="Digite sua senha"/>
                            </div>
                            <div className="mb-3">
                                <Label htmlFor="senha" className="form-label">Confirmar senha</Label>
                                <input type="password" className="form-control" id="senha" name="senha" placeholder="Digite sua senha"/>
                            </div>
                            <div>
                                <H5>Você é?</H5>
                                <Div>
                                    <input type="checkbox" id="checkbox1" name="checkbox1"></input>
                                    <Label for="checkbox1">Aluno</Label>
                                    <input type="checkbox" id="checkbox1" name="checkbox1"></input>
                                    <Label for="checkbox1">Professor</Label>
                                </Div>
                            </div>
                            <Link className="btn btn-primary" to="/">Cadastrar</Link> <div/>
                            <Link className="link-sucess link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/">Voltar</Link>
                        </form>
                    </Moldura>
                </div>
            </div>
    )
}