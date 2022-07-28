import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth.slice';
import goalReducer from '../features/goals/goal.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
  },
});
