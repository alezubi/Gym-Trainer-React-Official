import { WorkOutData } from "../../pages/workoutPage/WorkoutPlan.page"

interface WorkoutProps{
    workout:WorkOutData

}


/**
 * interface WorkoutModel{
 * 
 * 
 * }
 * 
 * 
 * 
 * useContext  const wizardSetup = useContext(WizardChoicesContext) 
 * we need to how many days 
 * what plan
 * know the splits
 * switch 
 * if wizardSetup.Split === 3
 * 
 */
export default function WorkOut({workout}:WorkoutProps){

    // returns the actual workout
    return(

        <>
          <tr>
            <th>Id: {workout.id}</th>
            <th>Name: {workout.description}</th>
            <th>Splits: {workout.exercise}</th>
          </tr> 
        </>

    )

}



