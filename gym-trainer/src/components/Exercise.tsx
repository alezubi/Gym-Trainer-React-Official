import { ExerciseData } from "../pages/ExercisePage";


interface ExerciseProps{
    exercise: ExerciseData;
}

// component for individual exercises
export default function Exercise({exercise}: ExerciseProps){

    return <div>
        <h3>Id: {exercise.id}</h3>
        <p>Name: {exercise.name}</p>
        Description: <td dangerouslySetInnerHTML={{__html: exercise.description}} />
    </div>
}