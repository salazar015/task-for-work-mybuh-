import React from "react";
import './table.css';


import ButtonEdit from "../button_edit/ButtonEdit";
import CloseSvg from "../../img/close.svg";

function Table(){
    return(
        <tr>
            <td>Ибраев Самат Каиркенович</td>
            <td>Директор</td>
             <td> 
                <form action="#">
                        <ul>
                            <li>
                                <div class="checkbox">
                                    Резидент
                                    <input type="checkbox" name="namecheckbox_1"></input>
                                </div> 
                            </li>
                            <li>
                                <div class="checkbox">
                                    Пенсионер
                                    <input type="checkbox" name="namecheckbox_2"></input>
                                </div> 
                            </li>
                            <li>
                                <div class="checkbox">
                                    Инвалид
                                    <input type="checkbox" name="namecheckbox_3"></input>
                                </div> 
                            </li>
                            <li>
                                <div class="checkbox">
                                    Многодетная мать
                                    <input type="checkbox" name="namecheckbox_4"></input>
                                </div> 
                            </li>
                        </ul>
                    </form>
                </td>
                <td>   
                    <div className="salary_flex">
                        <div className="salary">85 000,00</div>
                        <a href="#"><img src={CloseSvg} alt="" /></a>
                    </div>   
                    
                    <div className="salary_day">21.10.2021</div>
                    <div className="add_salary-btn">Добавить оклад</div>
                </td>
                <ButtonEdit/>
        </tr>
    );
        
    
}

export default Table;