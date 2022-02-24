import { useEffect, useState } from "react";

function TaskCard(props) {
  const [value, setValue] = useState(props.task.name);
  const [toggle, setToggle] = useState(true);
  const [cross, setCross] = useState(false);

  useEffect(() => setValue(props.task.name));

  const getStrike = () => {

    if (props.task.isDone) return <strike> {value} </strike>;
    return <span> {value} </span>;
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    let newTask = [...props.allTasks];
    newTask[props.index].name = e.target.value;
    props.updateTask(newTask);
  };

  const handleBlur = () => {
    if (value === "") props.deleteTask(props.index);
    setToggle(true);
  }

  return (
    <div className="TaskCard">
      <div
        className="list lefty"
        onMouseEnter={() => setCross(true)}
        onMouseLeave={() => setCross(false)}
      >
        <div
          className="checkers" id={props.index}
          style={props.task.isDone ? { color: "green" } : { color: "white" }}
          onClick={() => props.toggleComplete(props.index)}
        >
          &#10004; {/* Check mark */}
        </div>
        {toggle ? (
          <span onDoubleClick={() => setToggle(false)}> {getStrike()} </span>
        ) : (
          <input
            type="text"
            value={value}
            onKeyUp={e => e.key === "Enter" && handleBlur()}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        )}
        <button
          type="button"
          className="cross"
          onClick={() => props.deleteTask(props.index)}
        >
          {cross && <span>&#x2715;</span>}
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
