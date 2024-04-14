 const formatData = (data) => {
    const dataArray = [];

    for (let i = 0; i < data.rounds; i++) {
      dataArray.push({
        time: data.workDuration * 60,
        status: "focus",
        session: i,
      });
      dataArray.push({
        time: data.breakDuration * 60,
        status: "brack",
        session: i,
      });
    }
    dataArray.push({ time: data.longBreakDuration * 60, status: "long brake" });
    return {
      time: dataArray,
      settings: {
        notification: data.notification,
        autoplay: data.autoplay,
        timeInTitle: data.timeInTitle,
      },
      sound: data.sound,
    };
  };
  export default formatData