import DayOfTheWeek from "./DayOfTheWeek"
import "./WeekView.css"

function WeekView() {

    const workoutPlan: any[] = [
        {
        day: "Sunday",
        time: "9am",
        place: "Gym"
        },
        {
        day: "Monday",
        time: "9am",
        place: "Gym"
        },
        {
        day: "Tuesday",
        time: "9am",
        place: "Gym"
        },
        {
        day: "Wednesday",
        time: "9am",
        place: "Gym"
        },
        {
        day: "Thursday",
        time: "9am",
        place: "Gym"
        },
        {
        day: "Friday",
        time: "9am",
        place: "Gym"
        },
        {
        day: "Saturday",
        time: "9am",
        place: "Gym"
        }
    ]

    return (
        <>
            <h2>Weekly Workout Schedule</h2>
            <div className="week">
                {workoutPlan.map((day, i) => <DayOfTheWeek key={i} day={day.day} time={day.time} place={day.place}/>)}
            </div>
        </>
    )
}

export default WeekView