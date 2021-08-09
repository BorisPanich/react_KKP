import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { ComponentMeta, ComponentStory, Meta, Story } from '@storybook/react';

export default {
    title: 'UseMemo',
} as Meta;

export const DifficultCountingExemple = () => {
    const [a, setA] = useState<number>(4);
    const [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    /* Хук useMemo позволяет запоминать (и перерисовывать) значение входящей функциии, 
    если не изменились входные параметры */
    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA *= i
        }
        return tempResultA;
    }, [a])

    for (let i = 1; i <= b; i++) { resultB = resultB * i };

    const onChangeA = (e: ChangeEvent<HTMLInputElement>) => {
        setA(+e.currentTarget.value)
    }
    const onChangeB = (e: ChangeEvent<HTMLInputElement>) => {
        setB(Number(e.currentTarget.value))
    }

    return <>
        <input value={a} onChange={onChangeA} />
        <input value={b} onChange={onChangeB} />
        <hr />
        <div>Result for a:{resultA}</div>
        <div>Result for b:{resultB}</div>
    </>

}


const UsersMemo = (props: { users: string[] }) => {
    console.log("UsersMemo");
    return <div>{
        props.users.map((u, i) => <div key={i} >{u}</div>)
    }</div>
}

/* React.memo - HOС, который позволяет не перерисовывать компоненту UsersMemo, 
если не изменились входящие props */
const Users = React.memo(UsersMemo);

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo");

    const [counter, setCounter] = useState<number>(0);
    const [users, setUsers] = useState<string[]>(["Boris", "Olha", "Gleb", "Nazar"]);

    /* отфильтруем всех users, у которых имеется "О", */
    /* в данном случаи будет происходить перерисовка UsersMemo 
    const newArray = users.filter(u => u.toLowerCase().indexOf("a") > -1); */

    /* useMemo используется всегда при map, sort, filter */
    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1);
    }, [users])

    const addUsers = () => {
        const newUsers = [...users, "Angelina" + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)} >+</button>
        <button onClick={() => addUsers()} >add Users</button>
        {counter}
        <Users users={newArray} />
    </>

}

export const LikeUseCallback = () => {
    console.log("LikeUseCallback");

    const [counter, setCounter] = useState<number>(0);
    const [books, setBooks] = useState<string[]>(["React", "JS", "CSS", "HTMl"]);

    /* useMemo */
    const memoizedAddBook = useMemo(() => {
        return () => {          // отсутствие этой строки требует уже useCallback
            console.log(books);
            const newBooks = [...books, "Angular" + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    /* useCallback использовать нужно всегда, когда есть передоваемый 
    в пропсах callback (обычно при большом количестве кнопок) */
    const memoizedAddBook2 = useCallback(() => {
        console.log(books);
        const newBooks = [...books, "Angular" + new Date().getTime()]
        setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)} >+</button>
        {counter}
        <Book addBook={memoizedAddBook2} />
    </>

}

type BooksSecretType = {
    addBook: () => void
}
const BooksSecret = (props: BooksSecretType) => {
    console.log("BookSecret");
    return <>
        <button onClick={() => props.addBook()} >add book</button>
    </>
}

const Book = React.memo(BooksSecret);