import { useState } from "react"
import './CharacterForm.css'

function CharacterForm({ filters, onSearch, onReset, onRandom }) {
    // Workaround to keep the select default value after re-render
    const [selectValue, setSelectValue] = useState('')

    return (
        <form className='character-form' action={onSearch}>
            <label>Name: <input name='name' defaultValue={filters.get('name')} /></label>
            <label>Species: <input name='species' defaultValue={filters.get('species')} /></label>
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
        </form>
    )
}

export default CharacterForm