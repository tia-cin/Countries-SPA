import { Link } from 'react-router-dom'
import React from 'react'
import style from './styles/landing.css'

const LandingPage = () =>{
    return (
        <div className={style.container}>
            <div>
                <h1 className='text-white fs-xxl'>Countries App</h1>
            </div>
            <div>
                <span className='text-light'>Discover all the countries in the world and add turistic activities</span>
            </div>
            <div>
                <Link to='/countries'>
                    <button className={style.button}>Start</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage