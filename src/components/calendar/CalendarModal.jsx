import Modal from 'react-modal';
import './modal.css';
import moment from 'moment';
import DatePicker from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { useState } from 'react';
import Swal from 'sweetalert2';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlus1 = now.clone().add(1, 'hours');

const CalendarModal = () => {
    const [dateStart, setDateStart] = useState(now.toDate());
    const [dateEnd, setDateEnd] = useState(nowPlus1.toDate());

    const [formValues, setFormValues] = useState({
        title: 'Evento',
        notes: '',
        start: now.toDate(),
        end: nowPlus1.toDate(),
    });
    const [titleValid, setTitleValid] = useState(true)

    const { title, notes, start, end } = formValues;

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value,
        });
    }

    const closeModal = () => {

    };

    const handleStartDateChange = (date) => {
        setDateStart(date);
        setFormValues({
            ...formValues,
            start: date,
        });
    };

    const handleEndtDateChange = (date) => {
        setDateEnd(date);
        setFormValues({
            ...formValues,
            end: date,
        });
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const momentStart = moment(start);
        const momentEnd = moment(end);

        if (momentStart.isSameOrAfter(momentEnd)) {
            return Swal.fire('Error', 'La fecha de final debe ser mayor a la fecha de inicio', 'error');
        }

        if (title.trim().length < 2) {
            return setTitleValid(false);
        }

        setTitleValid(true)
        closeModal();
    }

    const yesterday = moment(dateStart).subtract(1, 'day')
    const valid = (current) => {
        return current.isAfter(yesterday);
    };

    return (
        <Modal
            isOpen={true}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-fondo"
        >
            <h1 className="title-modal"> Nuevo evento </h1>
            <hr className="separador" />
            <form
                onSubmit={handleSubmitForm}
                className="container">
                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DatePicker
                        inputProps={{
                            style: { width: 250, background: 'white', color: 'black' }
                        }}
                        value={dateStart}
                        onChange={handleStartDateChange}
                        dateFormat="DD-MM-YYYY"
                        timeFormat="hh:mm A"
                        closeOnSelect={true}
                        closeOnClickOutside={true}

                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DatePicker
                        inputProps={{
                            style: { width: 250, background: 'white', color: 'black' }
                        }}
                        value={dateEnd}
                        onChange={handleEndtDateChange}
                        dateFormat="DD-MM-YYYY"
                        timeFormat="hh:mm A"
                        closeOnSelect={true}
                        closeOnClickOutside={true}
                        isValidDate={valid}
                    />
                </div>

                <hr className="separador" />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className={`form-control ${!titleValid && 'is-invalid'}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={title}
                        onChange={handleInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={notes}
                        onChange={handleInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}

export default CalendarModal