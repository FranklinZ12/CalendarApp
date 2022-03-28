import { useDispatch } from 'react-redux';
import { eventDeleted } from 'actions/events';
import './deleteEventFab.css';

const DeleteEventFab = () => {
    const dispatch = useDispatch();

    const handleDeleteEvent = () => {
        dispatch(eventDeleted());
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