export const initialState = {
  todoList: [`Learn HTML`, `Learn CSS`, `Learn JS`, `Learn PHP`, `Stay alive`],
};

const Action = {
  GET_TASKS: `GET_TASKS`,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.GET_TASKS: return state;
    default: return state;
  }
};
