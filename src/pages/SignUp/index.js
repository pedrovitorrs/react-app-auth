import React,  {useState} from 'react';
import {Link} from 'react-router-dom';

import api from '../../services/api'; 

import { Form, Container } from "../../styles/styleSig/styles";

export default function Singup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleNovoUser(e){
        e.preventDefault();
        const data = {
            name,
            email,
            password,
        };

        if(!name || !email || !password){
            setError({error:"Preencha todos os dados"})
            
        }else{
            try {
                await api.post("/auth/register", data, {
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    "Access-Control-Allow-Origin": "*",
                },
                });
            } catch (err) {
                setError({error:"Email já cadastrado"});
            }
        }
    }

    return (
        <Container>
            <Form onSubmit={handleNovoUser}>
                {error.error && <p>{error.error}</p>}
                <input
                    type="text"
                    placeholder="Nome de usuário"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type="email"
                    placeholder="Endereço de e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button type="submit">Cadastrar</button>
                <hr />
                <Link to="/">Fazer login</Link>
            </Form>
        </Container>
    );
}