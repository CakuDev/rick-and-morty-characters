import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { getCharacters } from '../api/rickAndMortyApi'
import CharacterGrid from './CharacterGrid'
import './CharacterSearch.css'

function CharacterSearch() {
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        getCharacters(page)
            .then(({ results, pages }) => {
                setCharacters(results)
                setTotalPages(pages)
            })
            .catch(error => console.log(error))
    }, [page])

    return (
        <>
            <CharacterGrid characters={characters} />
            <div className='pagination'>
                <button disabled={page <= 1} onClick={() => setPage(page - 1)}><FontAwesomeIcon icon={faAngleLeft} /></button>
                <select value={page} onChange={(e) => setPage(parseInt(e.target.value))}>
                    {[...Array(totalPages).keys()].map(n => <option key={n + 1} value={n + 1}>{n + 1}</option>)}
                </select>
                <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}><FontAwesomeIcon icon={faAngleRight} /></button>
            </div>
        </>
    )
}

export default CharacterSearch