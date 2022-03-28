import Navbar from 'components/ui/Navbar';
import { messages } from 'helpers/calendar-messages-Es';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';
import 'moment/locale/es'
import { CalendarEvent } from './CalendarEvent';
import { useState } from 'react';
import CalendarModal from './CalendarModal';

const localizer = momentLocalizer(moment);
moment.locale('es');
const events = [{
    title: 'Cumpleaños jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar pastel',
    user: {
        _id: '123',
        name: 'Frank'
    }
}]

const CalendarScreen = () => {
    const [lastView, setLastVie] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClick = (event) => {

    }

    const onSelecEvent = (event) => {

    }

    const onViewChange = (event) => {
        setLastVie(event);
        localStorage.setItem('lastView', event);
    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }
        return {
            style
        }
    }

    return (
        <div className="calendar-screen">
            <Navbar />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelecEvent}
                onView={onViewChange}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />
            <CalendarModal />
        </div>
    )
}

export default CalendarScreen