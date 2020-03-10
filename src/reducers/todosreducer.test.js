import todos from "./todos";

describe("Todos reducer unit test", () => {
  //Iniital State
  it("should return an empty array when initial state and action is undefined", () => {
    expect(todos(undefined, {})).toEqual([]);
  });
  //case ADD_TODO
  it("should update the state when adding a todo item to the list", () => {
    const addTodoAction = {
      type: "ADD_TODO",
      id: 1,
      text: "buy milk"
    };
    expect(todos([], addTodoAction)).toEqual([
      { completed: false, id: 1, text: "buy milk" }
    ]);
  });
  it("should update the state when adding a second todo item to the list", () => {
    const initialState = [{ id: 1, text: "buy milk", completed: false }];
    const addTodoAction = {
      type: "ADD_TODO",
      id: 2,
      text: "go shopping"
    };
    expect(todos(initialState, addTodoAction)).toEqual([
      { completed: false, id: 1, text: "buy milk" },
      { completed: false, id: 2, text: "go shopping" }
    ]);
  });
  //case TOGGLE_TODO
  it("should toggle incomplete to complete", () => {
    const initialState = [{ id: 1, text: "buy milk", completed: false }];
    const toggleTodoAction = {
      type: "TOGGLE_TODO",
      id: 1
    };
    expect(todos(initialState, toggleTodoAction)).toEqual([
      { completed: true, id: 1, text: "buy milk" }
    ]);
  });
});
