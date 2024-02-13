import { createStore } from "redux";
import audio from "../../components/Timer/audio/audio";

const initionState = {
  data: {
    workDuration: 25,
    breakDuration: 5,
    rounds: 4,
    longBreakDuration: 20,
    notification: true,
    autoplay: false,
    timeInTitle: false,
    sound: { name: "callToAttention", audio: audio.callToAttention, id: 0 },
  },
};

const timeReducer = (state = initionState, action) => {
  switch (action.type) {
    case "CHANGE_RAUNDS":
      return {
        ...state,
        data: { ...state.data, rounds: action.deploy },
      };

    case "CHAGE_WORK_DURATION":
      return {
        ...state,
        data: { ...state.data, workDuration: action.deploy },
      };

    case "BREAK_DURATION":
      return {
        ...state,
        data: { ...state.data, breakDuration: action.deploy },
      };
    case "LONG_BREAK_DURATION":
      return {
        ...state,
        data: { ...state.data, longBreakDuration: action.deploy },
      };

      case "SWITCH_TIME_IN_TITLE":
        return {
          ...state,
          data: { ...state.data, timeInTitle: action.deploy },
        };

        case "SWITCH_NOTIFICATION":
        return {
          ...state,
          data: { ...state.data, notification: action.deploy },
        };

        case "SWITCH_AUTOPLAY":
          return {
            ...state,
            data: { ...state.data, autoplay: action.deploy },
          };

    default:
      return state;
  }
};

export const timeStore = createStore(timeReducer);
