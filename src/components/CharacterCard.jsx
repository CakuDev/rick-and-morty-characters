import { faEarthAfrica, faHandSpock, faSkull, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CharacterCard.css'

function CharacterCard({ character, onClickCard }) {
    return (
        <div className='character-card' onClick={() => onClickCard(character)}>
            <img className='character-image' alt={character.name} src={character.image} />
            <div className='character-data'>
                <h3 className='character-name'>{character.name}</h3>
                <span><FontAwesomeIcon icon={faHandSpock} />{character.species}</span>
                <span><FontAwesomeIcon icon={faUser} />{character.gender}</span>
                <span><FontAwesomeIcon icon={faSkull} />{character.status}</span>
                <span><FontAwesomeIcon icon={faEarthAfrica} />{character.location.name}</span>
            </div>
        </div>
    )
}

export default CharacterCard