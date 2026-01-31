import { useEffect, useRef, useState } from 'react'
import { getCharacters } from '../api/rickAndMortyApi'
import CharacterGrid from '../components/CharacterGrid'
import './CharacterPage.css'
import CharacterModal from '../components/CharacterModal'
import { useDispatch } from 'react-redux'
import { setCharacter } from '../redux/characterSlice'
import Pagination from '../components/Pagination'

function CharacterPage() {
    const dialogRef = useRef(null)
    const dispatch = useDispatch()

    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [filters, setFilters] = useState([])
    const [selectValue, setSelectValue] = useState('')

    function onClickCard(character) {
        dispatch(setCharacter(character))
        dialogRef.current.showModal()
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
        setFilters([{ key: 'name', value: formData.get('name') },
        { key: 'species', value: formData.get('species') },
        { key: 'status', value: formData.get('status') }])
        setPage(1)
    }

    function onReset() {
        setFilters([])
        setPage(1)
    }

    function onRandom() {
        const rand = Math.floor(Math.random() * characters.length);
        const randCharacter = characters[rand]
        onClickCard(randCharacter)
    }

    return (
        <>
            <form className='character-form' action={onSearch}>
                <label>Name: <input name='name' defaultValue={filters[0]?.value} /></label>
                <label>Species: <input name='species' defaultValue={filters[1]?.value} /></label>
                <label>Status: <select name='status' value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                    <option value=''></option>
                    <option value='alive'>Alive</option>
                    <option value='dead'>Dead</option>
                    <option value='unknown'>Unknown</option>
                </select></label>
                <div className='form-buttons'>
                    <button type="submit">Search</button>
                    <button type='button' onClick={onReset}>Reset</button>
                    <button type='button' onClick={onRandom}>Pick random</button>
                </div>
            </form >
            <CharacterGrid characters={characters} onClickCard={onClickCard} />
            <Pagination page={page} totalPages={totalPages} onChangedPage={(newPage) => setPage(newPage)}/>
            <CharacterModal dialogRef={dialogRef} />
        </>
    )
}

export default CharacterPage