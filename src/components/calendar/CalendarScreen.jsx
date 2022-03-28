import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import Navbar from 'components/ui/Navbar';
import { messages } from 'helpers/calendar-messages-Es';
import { CalendarEvent } from './CalendarEvent';
import CalendarModal from './CalendarModal';
import { uiOpenModal } from 'actions/ui';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';
import 'moment/locale/es';

import { eventSetActive, eventClearActiveEvent } from 'actions/events';
import AddNewFab from 'components/ui/AddNewFab';
import DeleteEventFab from 'components/ui/DeleteEventFab';


moment.locale('es');
const localizer = momentLocalizer(moment);


const CalendarScreen = () => {
    const [lastView, setLastVie] = useState(localStorage.getItem('lastView') || 'month');
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);

    const onDoubleClick = () => {
        dispatch(uiOpenModal());
    }

    const onSelecEvent = (event) => {
        dispatch(eventSetActive(event));
    }

    const onViewChange = (event) => {
        setLastVie(event);
        localStorage.setItem('lastView', event);
    }

    const onSelectSlot = (event) => {
        dispatch(eventClearActiveEvent());
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
                onSelectSlot={onSelectSlot}
                selectable={true}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />
            <AddNewFab />
            {
                (activeEvent) && <DeleteEventFab />
            }
            <CalendarModal />
        </div>
    )
}

export default CalendarScreen