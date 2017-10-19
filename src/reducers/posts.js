function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log("Incrementing Likes!!");
      console.log(state);
      return [
        ...state.slice(0,action.index), // before the one we are updating
        {...state[action.index], likes: state[action.index].likes + 1},
        ...state.slice(action.index + 1), // after the one we are updatings
      ]
    case 'INCREMENT_FOLLOWS' :
      console.log("Incrementing Follows!!");
      return [
        ...state.slice(0,action.index), // before the one we are updating
        {...state[action.index], follows: state[action.index].follows + 1},
        ...state.slice(action.index + 1), // after the one we are updatings
      ]

    default:
      return state;
  }
}

export default posts;

// {...state[0], likes: state[0].likes + 1},
