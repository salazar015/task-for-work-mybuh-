import React, { useEffect, useState } from 'react';
import {getEmployeesAPI} from './date';

import Table from './component/Table/Table';
import ImgHeader from "./img/plus_header.svg";

import './App.css';

function App() {

    const [date, setDate] = useState([])
    
    useEffect(() => {
        getEmployeesAPI().then(res => setDate(res))
    }, [])


    return (
        <div className="App">
            <div className="wrapper">
                <div className="container">
                    <div className="workers">
                        <div className="workers_header">
                            <h1>Работники</h1>
                            <button><img src={ImgHeader} alt="#"></img> Добавить работника </button>
                        </div>

                        <div class="workers_data">
                            {
                                date.length > 0
                                ? <Table date={date} setDate={setDate} /> 
                                : 'not info'
                            }
                           
                        </div>

                        <div class="workers_data-button">
                            <button>Отменить</button>
                            <button class="active">Сохранить</button>
                        </div>

                    </div>




                </div>
            </div>




        </div>
    );
}

export default App;
