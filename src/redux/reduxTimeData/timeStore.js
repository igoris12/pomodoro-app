import { createStore } from "redux";
// import timeReducer from "./timeReducer";
import audio from "../../components/Timer/audio/audio";

const initionState = {
    workDuration: 25,
    breakDuration: 5,
    rounds: 4,
    longBreakDuration: 20,
    notification: true,
    autoplay: false,
    timeInTitle: false,
    sound: { name: "callToAttention", audio: audio.callToAttention, id: 0 },
  }

const timeReducer = (state= initionState, action) => {
  switch (action.type) {
  
        case "CHANGERAUNDS":
            return {
               ...state, rounds: action.deploy
            }
   

    default:
      break;
  }
  return state;
};

export const timeStore = createStore(timeReducer);
