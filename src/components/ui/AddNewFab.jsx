import { uiOpenModal } from 'actions/ui';
import { useDispatch } from 'react-redux';
import './addNewFab.css';

const AddNewFab = () => {
    const dispatch = useDispatch();

    const handleClickNew = () => {
        dispatch(uiOpenModal())
    }
    return (
        <buttons
            className="btn btn-primary fab"
            onClick={handleClickNew}
        >
            <i className="fas fa-plus"></i>
        </buttons>
    )
}

export default AddNewFab