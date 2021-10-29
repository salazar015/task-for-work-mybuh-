import React from 'react';
import './App.css';
import Table from'./component/Table/Table';



import ImgHeader from"./img/plus_header.svg";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
            <div className="workers">
                <div className="workers_header">
                    <h2>Работники</h2>
                    <button><img src={ImgHeader} alt="#"></img> Добавить работника </button>
                </div>

                <div class="workers_data">
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
                            <Table/>
                            <Table/>
                            <Table/>
                        </tbody>
                    </table>
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
