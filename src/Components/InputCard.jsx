import { useState } from "react";

function InputCard(props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      if (value === "") return;

      const taskObj = { name: value, isDone: false };
      props.addTask(taskObj);
      setValue("");
    }
  };

  return (
    <div className="InputCard">
      <div className="input-group input-group-lg">
        {props.flag ? (
          <button
            className="btn btn-light btn-lg"
            onClick={() => props.completeAll()}
          >
            <span className="rotate">❯</span>
          </button>
        ) : (
          <button
            className="btn btn-light btn-lg disable"
          ></button>
        )}
        <input
          type="text"
          className="form-control inp"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="What needs to be done?"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyUp={handleSubmit}
        />
      </div>
    </div>
  );
}

export default InputCard;
