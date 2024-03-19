import React, { useState } from "react";
import ToDoCard from "../Todo-Card";

const ToDoForm = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    let newTask = {
      id: taskList.length,
      title: task,
      status: "want-to-do",
    };
    setTaskList([...taskList, newTask]);
    console.log(taskList);
    setTask("");
  };
  const deleteTask = (taskId) => {
    const updatedTaskList = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTaskList);
  };

  const updateStatus = (taskId) => {
    const updatedTaskList = taskList.map((task) =>
      task.id === taskId
        ? {
            ...task,
            status: task.status === "want-to-do" ? "done" : "want-to-do",
          }
        : task
    );
    setTaskList(updatedTaskList);
  };

  return (
    <div className="container mt-4">
      <div className="card bg-secondary">
        <div className="card-body">
          <h1 className="card-title text-white">To-Do App</h1>
          <input
            type="text"
            className="form-control"
            placeholder="Enter New Task"
            value={task}
            onChange={handleInputChange}
          />
          <button className="btn btn-success mt-4" onClick={addTask}>
            Add
          </button>
        </div>
      </div>
      <div>
        {taskList.map((task, index) => (
          <ToDoCard
            key={`${index}`}
            task={task}
            deleteTask={deleteTask}
            updateStatus={updateStatus}
          />
        ))}
      </div>
    </div>
  );
};
export default ToDoForm;
