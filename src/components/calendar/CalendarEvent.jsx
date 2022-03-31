import { useSelector } from "react-redux";

export const CalendarEvent = ({ event }) => {
    const { title, user } = event;
    const { name } = useSelector(state => state.auth);

    return (
        <>
            {
                user && user.name === name && (
                    <div>
                        <strong>{title}</strong>
                        <span>-{user.name}</span>
                    </div>
                )
            }
        </>
    )
}
