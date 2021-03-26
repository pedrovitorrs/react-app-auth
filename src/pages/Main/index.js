import React, {useContext, useState, useEffect} from 'react';
import { MdFormatAlignLeft} from "react-icons/md";
import { FiUsers } from "react-icons/fi";

import { Context } from '../../Context/AuthContext';
import { ContextProject } from '../../Context/ProjectContext';

import api from '../../services/api';
import checklist from '../../images/checklist.jpg';

import ListProjects from '../../components/ListProjects';
import FlexTasks from '../../components/FlexTasks';

import {Container, Header, Sidebar, MenuPrincipal, H2,H3, Forms, Form, Button, Img} from './style';

export default function Dashboard() {
    const { handleLogout} = useContext(Context);
    const { valueButton } = useContext(ContextProject);
    const [project, setProject] = useState([]);
    const [task, setTasks] = useState([]);
    const [ProjectTitle, setProjectTitle] = useState('');
    const [TaskTitle, setTaskTitle] = useState('');
    const [stateButton, setStateButton] = useState(false);
    let nameUser = localStorage.getItem('name');
    let listaId = [];
    
    useEffect(() => {
        async function getProjects() {
            try{
                let listTask = [];
                const idUser = localStorage.getItem('id'); /*Caso eu queira pegar o nome do usuário cadastrado na sessão devo utilizar a mesma síntaxe*/
                const response = await api.get(`/projects/${JSON.parse(idUser)}`);
                /*
                Percorre cada posição do objeto JSON e no elemento 'tasks', 
                que também é um vetor, atribui seus valores a uma lista
                */
                response.data.forEach(element => {
                    if(element.tasks.length > 0)
                        listTask.push(element.tasks)
                });
                
                setTasks(listTask)
                setProject(response.data);
            } catch(err){
                console.log(err);
            }
        }
        getProjects();
    }, [ProjectTitle]);

    async function handleCreateProject(e){
        const data = {
            "title": ProjectTitle
        };

        if(data.title){
            try{
                await api.post("/projects", data, {
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
            } catch (err){
                console.log(err);
            }
        }
    }

    async function handleCreateTask(e){
        let idUser = localStorage.getItem('id');
        const data = {
            "tasks": [{
                "title": TaskTitle,
                "assignedTo": `${JSON.parse(idUser)}`
            }]
        };
        if(data.tasks[0].title){
            try{
                await api.put(`/projects/${listaId[valueButton]}`, data, {
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
            } catch (err){
                console.log(err);
            }
        }
    }

    function handleButton(e){
        if(stateButton)
            return setStateButton(false);
        return setStateButton(true);
    }

    return (
        <Container>
            <Header> 
                <div>
                    <ul>
                        <button type="button" onClick={handleLogout}><FiUsers color={'fff'}size={20}/></button>
                    </ul>
                </div>
                <div>
                    <h2>
                        Olá, {JSON.parse(nameUser)}
                    </h2>
                </div>
            </Header>
            <Sidebar >
                <H2>All</H2>
                <H3><MdFormatAlignLeft size={20}/>List</H3>
                {
                    project.map((projeto,index) => {
                        listaId.push(projeto._id)
                        return(
                            <ListProjects data={projeto} indic={index}/>
                        )
                    })
                }
                <Forms onSubmit={handleCreateProject}>
                    <input
                        type="text"
                        placeholder="New Project"
                        onChange={(e) => setProjectTitle(e.target.value)}
                        value={ProjectTitle}
                    />
                    <button type="submit">+</button>
                </Forms>
            </Sidebar>
            <MenuPrincipal>
                { stateButton && 
                <>
                    <Form onSubmit={handleCreateTask}>
                        <div>
                            <input
                                type="text"
                                placeholder="Title Task"
                                onChange={(e) => setTaskTitle(e.target.value)}
                                value={TaskTitle}
                            />
                            <input
                                type="text"
                                placeholder="Description"
                                /*onChange={(e) => setProjectTitle(e.target.value)}
                                value={ProjectTitle}*/
                            />
                        </div>
                        <button type="submit">Enviar</button>
                    </Form>
                </>
                }
                <Button type="button" onClick={(e) => handleButton()}>+</Button>
                { !task[valueButton] && 
                    <Img src={checklist} alt="checklist" height={300}/>
                }
                { task[valueButton] && 
                    task[valueButton].map((tasks,index) => {
                        return(
                            <FlexTasks zIndex={1} data={tasks}/>
                        )
                    })
                }
            </MenuPrincipal>
        </Container>
    );
}