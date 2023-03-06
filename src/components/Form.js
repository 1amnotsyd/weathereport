import React from "react";

const Form = (props) => (
    <form onSubmit={props.weather}>
        <input type={"text"} name={"city"} placeholder={"Введите название города"} />
        <button>Получить информацию о погоде</button>
    </form>
)

export default Form;