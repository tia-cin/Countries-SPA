import React from "react";
import { Link } from "react-router-dom";
import style from './styles/card.css'

const Card = ({ name, flag, continent, id }) => {
    return (
        <div className={style.container}>
            <div className={style.img}>
                <img src={flag} alt={name} />
                <Link to={'/countries/' + id}>
                    <button className={style.button}>+</button>
                </Link>
            </div>
            <div className={style.titles}>
               <h3>{name}</h3>
                <h3>{continent}</h3> 
            </div>
        </div>
    )
}

export default Card