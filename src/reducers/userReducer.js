const initialState = {
  name: '',
  level: '',
  workoutDays: [],
  myWorkouts: [],
  lastWorkout: '',
  dailyProgress: ['2020-10-27', '2020-10-28'],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload.name };
      break;
  }
  return state;
};
