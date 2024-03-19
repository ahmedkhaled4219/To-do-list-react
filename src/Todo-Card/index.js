import React from "react";

const ToDoCard = ({ task, deleteTask, updateStatus }) => {
  const handleDelete = () => {
    deleteTask(task.id);
  };
  const handleUpdateStatus = () => {
    updateStatus(task.id);
  };

  const titleStyle =
    task.status === "done" ? { textDecoration: "line-through" } : {};
  const statusButtonLabel = task.status === "done" ? "Undo" : "Mark as Done";
  return (
    <div className="container mt-2">
      <div className="card bg-body-secondary">
        <div className="card-body">
          <h5 className="card-title" style={titleStyle}>
            {task.title}
          </h5>
          <button className="btn btn-danger mr-10" onClick={handleDelete}>
            Delete
          </button>
          <button className="btn btn-primary" onClick={handleUpdateStatus}>
            {statusButtonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoCard;
