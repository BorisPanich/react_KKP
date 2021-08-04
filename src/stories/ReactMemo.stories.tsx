import { Meta } from '@storybook/react';
import React, { useState } from 'react';

export default {
    title: 'ReactMemo',
} as Meta;

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

/* UsersMemo компонента, которая перерисовывается при каждой перерисовке state */
const UsersMemo = (props: { users: string[] }) => {
    console.log("Users");
    return <div>{
        props.users.map((u, i) => <div key={i} >{u}</div>)
    }</div>
}

/* React.memo - HOС, который позволяет не перерисовывать компоненту UsersMemo, 
если не изменились входящие props */
const Users = React.memo(UsersMemo);

export const Exemple1 = () => {

    const [counter, setCounter] = useState<number>(0);
    const [users, setUsers] = useState<string[]>(["B", "O", "G", "N"]);

    const addUsers = () => {
        /* Необходимо создавать копию и добавлять её, 
        иначе React не даст добавить users */
        const newUsers = [...users, "A" + new Date().setTime]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)} >+</button>
        <button onClick={addUsers} >add users</button>
        <NewMessageCounter count={counter} />
        <Users users={users} />
    </>

}