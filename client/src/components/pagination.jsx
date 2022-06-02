import { React } from 'react';
import style from './styles/pagination.css'

const Paginado = ({ countriesPerPage, allCountries, paginado }) => {
	let pageNumbers = []

	for (let i = 1; i < Math.ceil(allCountries / countriesPerPage); i++) {
		pageNumbers.push(i)
	}

	return (
		<nav className={style.container}>
				{
					pageNumbers && pageNumbers.map(n => (
							<button className={style.number} key={n} onClick={() => paginado(n)}>{n}</button>
					))
				}
		</nav>
	)
}

export default Paginado