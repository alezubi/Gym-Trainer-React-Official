import "./DayOfTheWeek.css"

function DayOfTheWeek(props: any) {
  return (
    <div className="day">
        <div className="title">
            <strong>{props.day}</strong>
        </div>
        <p>{props.time} {props.place}</p>
    </div>
  )
}

export default DayOfTheWeek