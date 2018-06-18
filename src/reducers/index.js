export default (state = 0, actions) => {
  switch (actions.type) {
    case "INCREMENT":
      return state + 1;
      break;
    case "DECREMENT":
      return state - 1;
      break;
    default:
      return state;
        break;
  }
};
