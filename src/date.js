
const employees = [
    {   
        id: 1,
        name: "Иван Иваныч", // в реестре: ИМЯ
        position: "Директор",  // Должность
        social: { // Социальные статусы
            resident: true,  //Резидент
            pensioner: false, // Пенсионер
            disabled: false // Инвалид
        },
        salaries: [  // оклады
            {
                date: "10.10.2020",
                sum: "85000"
            },
            {
                date: "10.11.2020",
                sum: "95000"
            },
        ]
    },
    {
        id: 2,
        name: "Имя Фамилия", // в реестре: ИМЯ
        position: "web-разработчик",  // Должность
        social: { // Социальные статусы
            resident: false,  //Резидент
            pensioner: false, // Пенсионер
            disabled: false // Инвалид
        },
        salaries: [  // оклады
            {
                date: "10.10.2020",
                sum: "85000"
            },
            {
                date: "10.11.2020",
                sum: "95000"
            },
        ]
    },
]

/*
 * ф-я имитирующая получение работников с АПИ - использовать ее
 */
export const getEmployeesAPI = () => {
    return new Promise(res => {
        setTimeout(() => {
            res(employees)
        }, 1000);
    })
};