import React, { useState } from "react";

export const AddTodo = (props) => {
  let myStyle = {
    margin: "10px",
  };
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title and Descripton cannot be empty");
    } else props.addTodo(title, desc);

    setTitle("");
    setDesc("");
  };
  return (
    <div className="container my-3">
      <h3>Add a Task</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="description"
          />
        </div>
        <button
          type="submit"
          className="btn btn-sm btn-success"
          onClick={submit}
        >
          Add Task
        </button>
        <button
          className="btn btn-sm btn-danger"
          style={myStyle}
          onClick={props.clearTask}
        >
          Clear List
        </button>
      </form>
    </div>
  );
};
