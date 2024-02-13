import { createStore } from "redux";
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
};

const timeReducer = (state = initionState, action) => {
  switch (action.type) {
    case "CHANGE_RAUNDS":
      return {
        ...state,
        rounds: action.deploy,
      };

    case "CHAGE_WORK_DURATION":
      return {
        ...state,
        workDuration: action.deploy,
      };

    default:
      return state;
  }
};

export const timeStore = createStore(timeReducer);
