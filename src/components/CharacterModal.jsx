import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux"
import './CharacterModal.css'
import CharacterGrid from "./CharacterGrid"
import { getCharactersByLocation } from "../api/rickAndMortyApi"
import { useEffect, useState } from "react"
import { setCharacter } from "../redux/characterSlice"
import { addCharacter, removeCharacter } from "../redux/favouritesSlice"

function CharacterModal({ dialogRef }) {
    const character = useSelector((state) => state.character.value)
    const favourites = useSelector((state) => state.favourites.value)
    
    const dispatch = useDispatch()
    
    const [sameLocationCharacters, setSameLocationCharacters] = useState([])

    useEffect(() => {
        if (!character) return
        getCharactersByLocation(character.location.url)
            .then(res => setSameLocationCharacters(res.filter(c => c.id != character.id)))
            .catch(setSameLocationCharacters([]))
    }, [character])
    return (
        <dialog className="character-modal" ref={dialogRef}>
            {character && <>
                <div className="character-info">
                    <img className='character-image' alt={character.name} src={character.image} />
                    <div className="character-data">
                        <h2>{character.name}</h2>
                        <span className="data-detail">Status: {character.status}</span>
                        <span className="data-detail">Specie: {character.species}</span>
                        <span className="data-detail">Type: {character.type || '-'}</span>
                        <span className="data-detail">Gender: {character.gender}</span>
                        <span className="data-detail">Location: {character.location.name}</span>
                    </div>
                </div>
                {favourites.filter(c => c.id == character.id).length == 0 ?
                <button onClick={() => dispatch(addCharacter(character))}>Add to favourites</button>
                : <button onClick={() => dispatch(removeCharacter(character))}>Remove from favourites</button>
                }
                <h3>Other characters from {character.location.name}</h3>
            </>}

            <CharacterGrid characters={sameLocationCharacters} onClickCard={(character) => dispatch(setCharacter(character))} />
            <button className='modal-close' onClick={() => dialogRef.current.close()}><FontAwesomeIcon size="xl" icon={faXmark} /></button>
        </dialog>
    )
}

export default CharacterModal