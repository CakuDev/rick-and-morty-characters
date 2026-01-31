import { useDispatch, useSelector } from "react-redux"
import { setCharacter } from "../redux/characterSlice"
import CharacterGrid from "./CharacterGrid"
import Modal from "./utils/Modal"

function FavouritesModal({ dialogRef, characterModalRef }) {
    const favourites = useSelector((state) => state.favourites.value)
    const dispatch = useDispatch()

    function showCharacter(character) {
        dispatch(setCharacter(character))
        dialogRef.current.close()
        characterModalRef.current.showModal()
    }

    return (
        <Modal dialogRef={dialogRef}>
            <CharacterGrid characters={favourites} onClickCard={(character) => showCharacter(character)} />
        </Modal>
    )
}

export default FavouritesModal