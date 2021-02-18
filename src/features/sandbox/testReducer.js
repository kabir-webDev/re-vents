const INCREMENT_NUMBER = "INCREMENT";
const DECREMENT_NUMBER = "DECREMENT";
export const ADD_NAME = "ADD";

export function increment(amount) {
  return {
    type: INCREMENT_NUMBER,
    payload: amount,
  };
}

export function decrement(amount) {
  return {
    type: DECREMENT_NUMBER,
    payload: amount,
  };
}

const initialState = {
  data: 50,
  name: ["Kabir"],
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        data: state.data + action.payload,
      };
    case "DECREMENT":
      return {
        ...state,
        data: state.data - action.payload,
      };
    case "ADD":
      return {
        ...state,
        name: [...state.name, ["SIkder"]],
      };
    default:
      return state;
  }
}
