import React,  {useState, useContext, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';

import api from '../../services/api'; 

import { Context } from '../../Context/AuthContext';

import { Form, Container } from "../../styles/styleSig/styles";

export default function Singin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { setAuthenticated} = useContext(Context);

    useEffect(() => {
        const token = localStorage.getItem('token');
    
        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }
    
    }, [setAuthenticated]);

    async function handleAuthenticate(e){
        e.preventDefault();
        const data = {
            email,
            password,
        };

        if(!email || !password){
            setError({error:"Preencha todos os Campos"})
        }else{
            try {
                const { data: { token }, data: {user: {_id} }, data: {user: {name} }  } = await api.post("/auth/authenticate", data, {
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    "Access-Control-Allow-Origin": "*",
                },
                });
                if(token){
                    localStorage.setItem('token', JSON.stringify(token));
                    localStorage.setItem('id', JSON.stringify(_id));
                    localStorage.setItem('name', JSON.stringify(name));
                    api.defaults.headers.Authorization = `Bearer ${token}`;
                    setAuthenticated(true);
                    <>
                        <Redirect to="/dashboard"/>
                    </>
                    
                }
            } catch (err) {
                setError({error:"Email não cadastrado"});
            }
        }
    }

    return (
        <Container>
            <Form onSubmit={handleAuthenticate}>
                {error.error && <p>{error.error}</p>}
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
                <button type="submit">Login</button>
                <hr />
                <Link to="/signup">Cadastrar</Link>
            </Form>
        </Container>
    );
}