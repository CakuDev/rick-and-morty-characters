import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Modal.css'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Modal({ children, dialogRef }) {
    return (
        <dialog className="modal" ref={dialogRef}>
            {children}
            <button className='close' onClick={() => dialogRef.current.close()}><FontAwesomeIcon size="xl" icon={faXmark} /></button>
        </dialog>
    )
}

export default Modal