import { Link } from 'react-router-dom'
import React from 'react'
import style from './styles/landing.css'

const LandingPage = () =>{
    return (
        <div className={style.container}>
            <h1 className={style.title}>Welcome to Countries App</h1>
            <span className={style.credit}>© Cintia Arce</span>
            <Link to='/countries'>
                <button className={style.button}>Start</button>
            </Link>
        </div>
    )
}

export default LandingPage