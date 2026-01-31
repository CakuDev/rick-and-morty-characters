import { useEffect, useRef, useState } from 'react'
import { getCharacters } from '../api/rickAndMortyApi'
import CharacterGrid from '../components/CharacterGrid'
import './CharacterPage.css'
import CharacterModal from '../components/CharacterModal'
import { useDispatch } from 'react-redux'
import { setCharacter } from '../redux/characterSlice'
import Pagination from '../components/utils/Pagination'
import CharacterForm from '../components/CharacterForm'
import FavouritesModal from '../components/FavouritesModal'

function CharacterPage() {
    const dialogDetailRef = useRef(null)
    const dialogFavouritesRef = useRef(null)
    const dispatch = useDispatch()

    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [filters, setFilters] = useState(new Map())

    function onClickCard(character) {
        dispatch(setCharacter(character))
        dialogDetailRef.current.showModal()
    }

    useEffect(() => {
        getCharacters(page, filters)
            .then(({ results, pages }) => {
                setCharacters(results)
                setTotalPages(pages)
            })
            .catch(error => console.log(error))
    }, [page, filters])

    function onSearch(formData) {
        const newFilters = new Map()
        newFilters.set('name', formData.get('name'))
        newFilters.set('species', formData.get('species'))
        newFilters.set('status', formData.get('status'))
        setFilters(newFilters)
        setPage(1)
    }

    function onReset() {
        setFilters(new Map())
        setPage(1)
    }

    function onRandom() {
        const rand = Math.floor(Math.random() * characters.length);
        const randCharacter = characters[rand]
        onClickCard(randCharacter)
    }

    return (
        <>
            <CharacterForm filters={filters} onRandom={onRandom} onReset={onReset} onSearch={onSearch} />
            <button className='show-favourites-button' onClick={() => dialogFavouritesRef.current.showModal()}>Show favourites</button>
            <CharacterGrid characters={characters} onClickCard={onClickCard} />
            <Pagination page={page} totalPages={totalPages} onChangedPage={(newPage) => setPage(newPage)} />
            <CharacterModal dialogRef={dialogDetailRef} />
            <FavouritesModal dialogRef={dialogFavouritesRef} characterModalRef={dialogDetailRef} />
        </>
    )
}

export default CharacterPage