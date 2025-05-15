import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from '../../imagens/logo.png'

const Moldura = styled.div`
    padding: 20px;
    width: 300px;
`;

const Img = styled.img`
    width: 100px;
`;

const Container = styled.div`
    background-color: #131D47;
    height: 100vh;
    weight: 
`;

const Label = styled.label`
    // color: white;

`;

const Input = styled.input`
    background-color: #9AECED;
    border-radius: 15px
`;


export default function Login(){
    return(
        <div>
                <div className="container-sm">
                    <div className="row justify-content-center mt-5 text-center">
                        <Moldura>
                            <Img src={Logo}></Img>
                            <form>
                                <div className="mb-3">
                                    <Label htmlFor="email" className="form-label">E-mail</Label>
                                    <Input type="text" className="form-control" id="email" name="email" placeholder="Digite seu email"/>
                                </div>
                                <div className="mb-3">
                                    <Label htmlFor="senha" className="form-label">Senha</Label>
                                    <Input type="password" className="form-control" id="senha" name="senha" placeholder="Digite sua senha"/>
                                </div>
                                <Link className="btn btn-primary" to="/">Login</Link> <div/>
                                <Link className="link-sucess link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/registrar">Cadastrar</Link> <br></br>
                                <Link to="/dashboard">Dashboard</Link>
                            </form>
                        </Moldura>
                    </div>
                </div>
        </div>
    );
};