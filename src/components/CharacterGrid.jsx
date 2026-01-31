import CharacterCard from './CharacterCard'
import './CharacterGrid.css'

function CharacterGrid({characters}) {
    
    return (
        <>
            <div className='character-grid'>
                {characters.map(c => <CharacterCard key={c.id} character={c} />)}
            </div>
        </>
    )
}

export default CharacterGrid