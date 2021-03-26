import React from 'react';

import {ListaTask, Title, Item} from './style'

export default function FlexTasks({data}) {
    return (
        <ListaTask>
            <li key={data.title}>
                <Item key={data.id}>
                    <Title>{data.title}</Title>
                </Item>
            </li>
        </ListaTask>
    )
}