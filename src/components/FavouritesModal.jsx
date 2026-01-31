import { useDispatch, useSelector } from "react-redux"
import { setCharacter } from "../redux/characterSlice"
import CharacterGrid from "./CharacterGrid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

function FavouritesModal({ dialogRef, characterModalRef }) {
    const favourites = useSelector((state) => state.favourites.value)
    const dispatch = useDispatch()

    function showCharacter(character) {
        dispatch(setCharacter(character))
        dialogRef.current.close()
        characterModalRef.current.showModal()
    }

    return (
        <dialog className="character-modal" ref={dialogRef}>
            <CharacterGrid characters={favourites} onClickCard={(character) => showCharacter(character)} />
            <button className='modal-close' onClick={() => dialogRef.current.close()}><FontAwesomeIcon size="xl" icon={faXmark} /></button>
        </dialog>
    )
}

export default FavouritesModal