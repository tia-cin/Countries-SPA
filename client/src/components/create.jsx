import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { createActivity, getCountries } from "../actions";
import style from './styles/create.css'

const CreateActivity = () => {
    const dispatch = useDispatch()
    const { countries } = useSelector(state => state)
    const [error, setError] = useState({})
    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: [],
    })

    let validation = () => {
        let error = {}
        if(!input.name) {
            error.name = 'Name is required!'
        } else if(!input.difficulty) {
            error.difficulty = 'Difficulty must be a number between 1 and 5!'
        } else if (!input.duration) {
            error.duration = 'Duration is required!'
        } else if (!input.season) {
            error.season = 'Season is required!'
        }
        return error
    }

    let handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setError(validation({
            ...input,
            [e.target.name] : e.target.value,
        }))
    }

    let handleCheckBoxCountries = (e) => {
        if(e.target.checked) {
                setInput({
                    ...input,
                    countries: [...input.countries, e.target.value]
                })
        }
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        dispatch(createActivity(input))
        setInput({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            countries: [],
        })
        alert('Your activity has been created succesfully, go check it out!')
    }

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    return (
        <div className={style.container}>
             <h1 className={style.title}>Create a Turistic Activity:</h1>
            <nav className={style.navbar}>
                <Link to='/countries'>
                    <button className={style.buttons}>Back to Home</button>
                </Link>
            </nav>
        <form onSubmit={e=>handleSubmit(e)} className={style.form}>
            <div className={style.inputContainer}>
                <label>Name:</label>
                <input
                    // required
                    type='text'
                    placeholder="Activity name..."
                    value={input.name}
                    name='name'
                    onChange={e=>handleChange(e)}
                /> { error.name &&  <p>{error.name}</p> }
            </div>
            <div className={style.inputContainer}> 
                <label>Difficulty:</label>
                <select onChange={e=>handleChange(e)} name="difficulty">
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                {error.dificulty && (<p className="error">{error.dificulty}</p>)}
            </div>
            <div className={style.inputContainer}>
                <label>Duration:</label>
                <input
                    // required
                    type='text'
                    placeholder='Duration...'
                    value={input.duration}
                    name='duration'
                    onChange={e=>handleChange(e)}
                /> { error.duration &&  <p>{error.duration}</p> }
            </div>
            <div className={style.inputContainer}> 
                <label>Season:</label>
                <select onChange={e=>handleChange(e)} name='season' >
                    <option value=''></option>
                    <option value='summer'>Summer</option>
                    <option value='winter'>Winter</option>
                    <option value='spring'>Spring</option>
                    <option value='autumn'>Autumn</option>
                </select>
            </div>
            
            <div className={style.inputContainer}>
                <label>Countries:</label>
                <div className={style.countriesContainer}>
                    {countries && countries.map(c => {
                        return (
                            <div key={c.id} className={style.countriesOptions}>
                                <label>{c.name}</label>
                                <input type='checkbox' value={c.name} onChange={e=>handleCheckBoxCountries(e)}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <button className={style.buttons}   type="submit">Create New Activity!</button>
        </form>
        </div>
        
    )
}

export default CreateActivity