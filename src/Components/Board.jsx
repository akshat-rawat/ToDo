import { useState } from "react";
import $ from "jquery";

import FooterCard from "./FooterCard";
import InputCard from "./InputCard";
import TaskCard from "./TaskCard";

function Board() {
  const [tasks, setTasks] = useState([]);
  const [allTasks, setAllTasks] = useState([]);

  const updateTask = (newTasks) => {
    setTasks(newTasks);
    setAllTasks(newTasks);
  };

  const getLength = () => {
    return [
      allTasks.filter((task) => !task.isDone).length,
      allTasks.filter((task) => task.isDone).length,
    ];
  };

  const addTask = (task) => {
    updateTask([...tasks, task]);
  };

  const deleteTask = (index) => {
    console.log(index);
    console.log(allTasks);
    const newTasks = allTasks.filter((ele, i) => i !== index);
    console.log(newTasks);
    updateTask(newTasks);
  };

  const toggleComplete = (index) => {
    tasks[index].isDone = !tasks[index].isDone;
    updateTask([...tasks]);
  };

  const filterTask = (fltr) => {
    if (fltr === "all") setTasks(allTasks);
    else if (fltr === "active")
      setTasks(allTasks.filter((task) => !task.isDone));
    else setTasks(allTasks.filter((task) => task.isDone));
  };

  const clearCompleted = () => {
    updateTask(allTasks.filter((task) => !task.isDone));
  };

  const completeAll = () => {
    const flag = allTasks.filter(task => task.isDone).length === allTasks.length;

    for (let index = 0; index < allTasks.length; index++) {
      if (!flag && allTasks[index].isDone) continue;

      let id = "#" + index;
      $(id).trigger("click");
    }
  };

  return (
    <div className="Board">
      <InputCard
        addTask={addTask}
        completeAll={completeAll}
        flag={allTasks.length !== 0}
      />
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          index={index}
          allTasks={allTasks}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          updateTask={updateTask}
        />
      ))}
      {allTasks.length !== 0 && (
        <FooterCard
          filterTask={filterTask}
          clearCompleted={clearCompleted}
          getLength={getLength}
        />
      )}
    </div>
  );
}

export default Board;
