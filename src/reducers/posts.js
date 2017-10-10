function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log("Incrementing Likes!!");
      const i = action.index;
      console.log(i);
      console.log(action);
      console.log(state);
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we are updatings
      ]

    default:
      return state;
  }
}

export default posts;

// {...state[0], likes: state[0].likes + 1},
