import React from 'react'
import { AffairType } from '../../HW2'
import s from './Affair.module.css'
import s2 from '../Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void  // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        // need to fix
        // ...и наконец берем из пропсов функцию, запускаем ее и передаем ей _id
        // давайте проследим боевой путь это функции, или как она будет всплывать:
        // открывай в нескольких окнах и следи:
        // отсюда она всплывет в компоненту Affairs вместе с _id ->
        // далее из Affairs всплывет в HW2->
        // в HW2 находим deleteAffairCallback- это и есть наш клиент ->
        // deleteAffairCallback вызовет setAffairs(...) и   deleteAffair(...)
        props.deleteAffairCallback(props.affair._id)
    }

    const nameClass = s.name + ' ' + s2[props.affair.priority]
    const buttonClass = s.closeButton + ' ' + s2[props.affair.priority]
    const affairClass = s.affair + ' ' + s2[props.affair.priority]

    return (
        <div
            id={'hw2-affair-' + props.affair._id}
            className={affairClass}
        >
            <div id={'hw2-name-' + props.affair._id} className={nameClass}>
                {/*создаёт студент*/}
                {props.affair.name}
                {/**/}
            </div>
            <div id={'hw2-priority-' + props.affair._id} hidden>
                {/*создаёт студент*/}
                {props.affair.priority}
                {/**/}
            </div>

            <button
                id={'hw2-button-delete-' + props.affair._id}
                className={buttonClass}
                onClick={deleteCallback}
                // need to fix
                //ОНКЛИК={(СКОБКИ СЛЕВА)=>deleteCallback(СКОБКИ СПРАВА, АРГУМЕНТ НЕ ЗАБЫЛ ПЕРЕДАТЬ?)}
            >
                {/*текст кнопки могут изменить студенты*/}
                delete
                {/**/}
            </button>
        </div>
    )
}

export default Affair
