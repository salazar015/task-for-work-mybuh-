import React, { useState } from "react";
import Button from "../Button";

import CloseSvg from "../../img/close.svg";


import './table.css';

function Table({ date, setDate }) {

    const [change, setChange] = useState(0)

    const onDelete = (id) => {
        setDate(date.filter(el => el.id !== id))
    }

    const onCopy = (id) => {
        const findElement = date.find(el => el.id === id)
        setDate((prevstate) => {
            return [...prevstate, findElement]
        })
    }

    const eventChange = (id) => {
        setChange(id)
    }

    const onChange = (event, key) => {
        const updateElement =  [...date].map(d => {
            if(d.id === change ) {
                d[key] = event.target.value
            }
            return d
        })
        setDate(updateElement)
    }

    return (
        <table>
            <thead className="workers_data-header">
                <tr>
                    <td>ФИО</td>
                    <td>Должность</td>
                    <td>Социальные статусы</td>
                    <td>Оклады</td>
                    <td>Действия</td>
                </tr>
            </thead>

            <tbody>
                {
                    date.map((el) => (
                        <tr key={el.id}>
                            <td>{change !== el.id ? el.name : <input className="inputText" value={el.name} onChange={(event) => onChange(event, "name")} />}</td>
                            <td>{change !== el.id ? el.position : <input className="inputText" value={el.position} onChange={(event) => onChange(event, "position")} />}</td>
                            <td>
                                <form action="#">
                                    <ul>
                                        <li>
                                            <div class="checkbox">
                                                Резидент
                                                <input type="checkbox" checked={el.social.resident} name="namecheckbox_1"></input>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="checkbox">
                                                Пенсионер
                                                <input type="checkbox" checked={el.social.pensioner} name="namecheckbox_2"></input>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="checkbox">
                                                Инвалид
                                                <input type="checkbox" checked={el.social.disabled} name="namecheckbox_3"></input>
                                            </div>
                                        </li>
                                    </ul>
                                </form>
                            </td>
                            <td>
                                {
                                    el.salaries.map(salaries => (
                                        <>
                                            <div className="salary_flex">
                                                <div className="salary">{salaries.sum}</div>
                                                <a href="#"><img src={CloseSvg} alt="" /></a>
                                            </div>
                                            <div className="salary_day">{salaries.date}</div></>
                                    ))
                                }
                                <div className="add_salary-btn">Добавить оклад</div>
                            </td>
                            <td>
                                <Button className="btn_action" type="button" name="Скопировать" onClick={() => onCopy(el.id)} />
                                <Button className="btn_action" type="button" name="Изменить" onClick={() => eventChange(el.id)} />
                                <Button className="btn_action btn_delete" type="button" name="Удалить" onClick={() => onDelete(el.id)} />
                            </td>

                        </tr>
                    ))
                }
            </tbody>
        </table>




    );


}

export default Table;