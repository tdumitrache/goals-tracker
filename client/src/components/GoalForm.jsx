import { useState } from 'react';
import { useDispatch, useSelector} from "react-redux"
import { addGoal } from '../features/goals/goal.slice';
import { Spinner } from "./index";

function GoalForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector((state) => state.goals)

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addGoal({text}));

    if (isSuccess) {
      setText("")
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor='text'>
              Goal
            </label>
            <input type="text" name="text" id="text" value={text} onChange={(e) => setText(e.target.value)}/>
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">Add Goal</button>
          </div>
        </form>
      </section>
    </>
  ) 
}

export default GoalForm