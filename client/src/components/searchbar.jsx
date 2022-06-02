import { useEffect } from "react";
import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountry } from "../actions";
import style from './styles/searchbar.css'

const SearchBar = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    let handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchCountry(search))
        setSearch('')
    }

    useEffect(() => {

    }, [dispatch])

    return (
        <form onSubmit={e=>handleSubmit(e)} className={style.container}>
            <input 
                className={style.input}
                type='text' 
                placeholder='Search country...'
                onChange={e=>handleChange(e)}
            />
            <button className={style.button} type='submit'>
                Search
            </button> 
        </form>
    )
}

export default SearchBar