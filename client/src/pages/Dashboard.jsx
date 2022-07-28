import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { reset, getGoals } from "../features/goals/goal.slice";
import { GoalForm, GoalItem, Spinner } from '../components';
import { toast } from "react-toastify";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (!user) {
      navigate("/login")
    }

    dispatch(getGoals(goals));

    return () => {
      dispatch(reset());
    }

  }, [user, dispatch]);

  if (isLoading) {
    return <Spinner />
  }


  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
      {goals.length > 0 ? (
        <div className='goals'>
          {goals.map((goal) => (
            <GoalItem key={goal._id} goal={goal} />
          ))}
        </div>
      ) : (
        <h1>You don't have any goals</h1>
      )}
    </>
  );
};

export default Dashboard;
