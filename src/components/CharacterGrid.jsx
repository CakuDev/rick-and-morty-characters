import CharacterCard from './CharacterCard'
import './CharacterGrid.css'

function CharacterGrid({characters = [], onClickCard = () => {}}) {
    
    return (
        <>
            <div className='character-grid'>
                {characters.map(c => <CharacterCard key={c.id} character={c} onClickCard={onClickCard} />)}
            </div>
        </>
    )
}

export default CharacterGrid