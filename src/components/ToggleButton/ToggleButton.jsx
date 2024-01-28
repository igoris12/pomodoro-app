import "./ToggleButton.scss";

const ToggleButton = ({ text, clickFunction, def = false, darkMode, name }) => {


  return (
    <>
      <label
        htmlFor={name}
        className={!darkMode === true ? "toggleButton" : "toggleButton dark"}
      >
        {text}
        <div className={def !== true ? "button" : "button active"}>
          <span className="toggleButtonThumb"></span>
          <span className="track"></span>
        </div>
        <input
          onChange={(e) => {
            clickFunction(e);
          }}
          name={name}
          id={name}
          type="checkbox"
          checked={def}
        />
      </label>
    </>
  );
};

export default ToggleButton;
