import { uiOpenModal } from 'actions/ui';
import { useDispatch } from 'react-redux';
import './addNewFab.css';

const AddNewFab = () => {
    const dispatch = useDispatch();

    const handleClickNew = () => {
        dispatch(uiOpenModal())
    }
    return (
        <button
            className="btn btn-primary fab"
            onClick={handleClickNew}
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}

export default AddNewFab