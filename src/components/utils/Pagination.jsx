import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Pagination.css'

function Pagination({ page, totalPages, onChangedPage }) {
    return (
        <div className='pagination'>
            <button disabled={page <= 1} onClick={() => onChangedPage(page - 1)}><FontAwesomeIcon icon={faAngleLeft} /></button>
            <select value={page} onChange={(e) => onChangedPage(parseInt(e.target.value))}>
                {[...Array(totalPages).keys()].map(n => <option key={n + 1} value={n + 1}>{n + 1}</option>)}
            </select>
            <button disabled={page >= totalPages} onClick={() => onChangedPage(page + 1)}><FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
    )
}

export default Pagination