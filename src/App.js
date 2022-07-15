import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./Components/About";
import { Contents } from "./Components/Contents";

function App() {
  let initT;
  if (localStorage.getItem("todos") === null) {
    initT = [];
  } else {
    initT = JSON.parse(localStorage.getItem("todos"));
  }

  const clearTask = () => {
    setTodos([]);
  };

  const onDelete = (todo) => {
    console.log("I am going to kill myself!", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("......Adding the Task ", title, "  ", desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initT);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <BrowserRouter>
      <Header title="TODO LIST" searchBar={false} />
      <Routes>
        <Route
          path="/"
          element={
            <Contents
              addTodo={addTodo}
              onDelete={onDelete}
              todos={todos}
              clearTask={clearTask}
            />
          }
          exact
        />
        <Route path="/about" element={<About />} exact />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
