import { useDispatch } from 'react-redux';
import './deleteEventFab.css';
import { eventStartDelete } from 'actions/events';

const DeleteEventFab = () => {
    const dispatch = useDispatch();

    const handleDeleteEvent = () => {
        dispatch(eventStartDelete());
    }

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={handleDeleteEvent}
        >
            <i className="fas fa-trash"> Borrar evento</i>
        </button>
    )
}

export default DeleteEventFab