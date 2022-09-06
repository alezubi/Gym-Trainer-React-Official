import React, { useState } from "react";

export default function GymForm(){

    const [goal, setGoal] = useState("");
    const [split, setSplit] = useState("");

    const handleGoalChange = (e: any) => {
        setGoal(e.target.value);
    }

    const handleSplitChange = (e: any) => {
        setSplit(e.target.value);
    }
    
    return <div> 
        <form>
            {/* user input */}

            <label> What is your desired outcome? </label>
            <select value={goal} onChange={handleGoalChange}>
                {/* <option value="NoGoal">Choose an option</option> */}
                <option value="Cutting">Cutting</option>
                <option value="Maintaining">Maintaining</option>
                <option value="Bulking">Bulking</option>
            </select>

            <label> How many times a week do you want to workout? </label>
            <select value={split} onChange={handleSplitChange}>
                {/* <option value="NoSplit">Choose an option</option> */}
                <option value="3-days">3 Days</option>
                <option value="4-days">4 Days</option>
                <option value="5-days">5 Days</option>
            </select>

            <button type="submit">Submit</button>
            {/* Need to handle submit to Generate workout */}
        </form>
    </div>
}

// Notes: 
/*
    - Do you want to see individual exercises or see all of them?
    - Do we want a filter function to categorize the main muscle group of each exercise?
    - How do we want the user/consumer to use this? What is the outcome of this feature?

    Pick the route we want to go in: (Form)
        - Users ( admin and customer )
            - customer
        - What is your desired outcome?
            - Bulking, maintaining, cuting (Enum)
        - User Schedule
            - Type of Split (3 - beginner, 4- intermediate, 5-advanced day split option)
    
    Then goes to the workouts that are appropriate to answered questions.

    Display after form: (photo, name, discription, link (optional), # reps, # sets)
        Workouts for split
            - workouts 

    Ex: render three days of exercises, one upper body, one lower body, and in between. 
    
*/

