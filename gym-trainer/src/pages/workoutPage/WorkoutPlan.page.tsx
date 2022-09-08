
import { useEffect, useState } from "react";
import WorkOut from "../../components/workout/workout.component";
import { WORKOUT_PLAN_API } from "../../util/ApiConfig";

export interface WorkOutData{
    id: number;
    category: number;
    description: string;
    exercise:[];
}

export default function WorkOutPage(){
    const [workout, setWorkout] = useState<Array<WorkOutData> | null>(null)
    useEffect(pageLoad, [])

    function pageLoad(){
        // fetch and bind data
        fetchData()
    }

    function fetchData() {

        WORKOUT_PLAN_API.get('workout')
            .then(response=>setWorkout(mapData(response.data)))

    }

    function mapData(data: any): Array<WorkOutData>{
        return data.results.map(({id,exercise, description, category}: any) => {
            return {
                "id": id,
                "category": category,
                "description": description,
                "exercise": exercise
            }
        })
    }

    return !workout ? 
    
         <LoadingBar /> :
         <>
            {workout.map((workout: WorkOutData, i) => <WorkOut key={i} workout={workout}/>)}
         </>


}

export function LoadingBar(){
    return(
    <>
    <p>'loading...'</p>
    </>
    )
}