import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: (error: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
    if (name.trim() !== '') {
        addUserCallback(name);
        // alert(`Hello ${name} !`);
        setName('');
    } else {
        setError('Ошибка! Введите имя!');
    }
};

// если имя пустое - показать ошибку: setError('Ошибка! Введите имя!'),
// иначе - добавить юзера при помощи addUserCallback и очистить инпут засетав ''
// проверить на пустоту можно при помощи метода trim(). К примеру: name.trim() !== ''
// ЕСЛИ НЕ БУДЕТ ПОЛУЧАТЬСЯ, НЕ РАССТРАИВАЙСЯ. НА ЧЕТВЕРТОМ ЗАНЯТИИ ПО ТУДУЛИСТУ НАУЧИМ), НО ВСЕ ТАКИ ПОПЫТАЙСЯ))

export const pureOnBlur = (name: string, setError: (error: string) => void) => {
    if (name.trim().length === 0) {
        setError('Ошибка! Введите имя!')
    }

}

export const pureOnEnter = (event: KeyboardEvent, addUser: () => void) => {
    if (event.key === 'Enter') {
        addUser();
    }
};


// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback,}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.value;
        setName(name);

        if (error) {
            setError('');
        }
    };

    const addUser = () => {
        // это всего лишь функция стрелочник-она всего лишь получает
        //сигнал из компоненты <Greeting/> и вызывает pureAddUser (с кучей аргументов)
        // ЗДЕСЬ НИЧЕГО ПИСАТЬ НЕ НУЖНО-ВСЕ ОК

        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        // все то же самое, что и в addUser -функция стрелочник
        // всего лишь получает сигнали из компоненты <Greeting/> и вызывает pureOnBlur (с кучкой аргументов)
        pureOnBlur(name, setError)
    }

    const onEnter = (event: KeyboardEvent) => {
        pureOnEnter(event, addUser);
    };


    const totalUsers = users.length;
    const lastUserName = users[users.length - 1]?.name;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
