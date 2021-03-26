import React, {useContext} from 'react';

import {ListaProjetos, Button, Li} from './styles'

import { ContextProject } from '../../Context/ProjectContext';

export default function Lista({data,indic}) {
    const { setValueButton } = useContext(ContextProject);

    function handleButton(e) {
        setValueButton(e.target.value);
    }
    return (
        <ListaProjetos key={data.id}>
            <Li key={data.id}>
                <Button type="button" value={indic} onClick={(e) => handleButton(e, "value")}>{data.title}</Button>
            </Li>
        </ListaProjetos>
    )
}