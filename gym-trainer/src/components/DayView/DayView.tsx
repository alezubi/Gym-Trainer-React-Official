import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ExerciseData, tempExercises } from '../../pages/ExercisePage';

interface workout {
    day: String,
    exercise: ExerciseData[],
    log: String,
    completed: Boolean
}

function mapData(data: any): Array<ExerciseData>{
    return data.map(({id, name, exercise_base, description, category, muscles, muscles_secondary, equipment, variations}: any) => {
        return {
            "id": id,
            "name": name,
            "exercise_base": exercise_base,
            "description": description,
            "category": category,
            "muscles": muscles,
            "muscles_secondary": muscles_secondary,
            "equipment": equipment,
            "variations": variations
        }
    })
}

export default function DayView() {
  const [show, setShow] = useState(false);
  const [workout, setWorkout] = useState({
    day : "Monday",
    exercise : mapData(tempExercises),
    log: "",
    completed: false
  });

  const [log, setLog] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const saveAndClose = () => {setShow(false); setWorkout(workout)}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{workout.day}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="checkbox" id="completed" name="completed" checked={completed} onChange={(e) => setCompleted(!completed)}></input>
            <label htmlFor='completed'> &nbsp; Completed</label>

            <br/>
            <br/>
            <br/>

            {workout.exercise.map(e => {
                return (<p>{e.name}</p>)
            })}

            <p><b>Log Day: </b></p>

            <textarea value={log} onChange={(e) => {setLog(e.target.value)}}/>
            {workout.log}


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveAndClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}