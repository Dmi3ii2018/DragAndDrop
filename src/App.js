import React, {useReducer, useEffect, useState, useRef} from 'react';
import './App.css';

import * as Reducer from './reducer/reducer';

function App() {
  const [tasks, dispatchTasks] = useReducer(Reducer.todoReducer, Reducer.initialState);
  const tasksList = useRef();

  const onDragStart = (evt) => {
    evt.target.classList.add(`selected`);
  };

  const onDragEnd = (evt) => {
    evt.target.classList.remove(`selected`);
  };

  const onDragOver = (evt) => {
    evt.preventDefault();

    const activeElement = tasksList.current.querySelector(`.selected`);
    const currentElement = evt.target;
    const isMoveable = activeElement !== currentElement &&
    currentElement.classList.contains(`tasks__item`);

    if (!isMoveable) {
      return;
    }

    const nextElement = (currentElement === activeElement.nextElementSibling) ?
      currentElement.nextElementSibling :
      currentElement;

    if (
      nextElement &&
      activeElement === nextElement.previousElementSibling ||
      activeElement === nextElement
    ) {
      return;
    }

    tasksList.current.insertBefore(activeElement, nextElement);
  };

  return (
    <section className="tasks">
      <h1 className="tasks__title">To do list</h1>
      <ul
        ref={tasksList}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
        className="tasks__list"
      >
        {tasks.todoList.map((task) => {
          return (
            <li draggable={true} key={task} className="tasks__item">{task}</li>
          );
        })}
      </ul>
    </section>
  );
}

export default App;
