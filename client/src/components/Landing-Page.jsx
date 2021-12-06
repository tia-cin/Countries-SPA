import { Link } from 'react-router-dom'
import React from 'react'
import style from './styles/Landing-Page.module.css'

const LandingPage = () =>{
    return (
        <div className={style.container}>
            <h1 className={style.title}>Welcome to Diets App!</h1>
            <Link to='/home/recipes'>
                <button className={style.btn}>Start</button>
            </Link>
        </div>
    )
}

export default LandingPage
