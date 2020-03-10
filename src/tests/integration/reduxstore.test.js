import { createStore } from "redux";
import rootReducer from "../../reducers";
import { addTodo, toggleTodo } from "../../actions";

/*
1. create a store
2. dispatch an action 
3. get the state
*/

describe("Redux store integration", () => {
  let store;
  beforeEach(() => {
    store = createStore(rootReducer);
  });
  it("should add 1 todo", () => {
    store.dispatch(addTodo("buy milk"));
    // console.log(store.getState());
    const todo = store.getState().todos.find(x => x.text === "buy milk");
    expect(todo.text).toEqual("buy milk");
    expect(todo.completed).toEqual(false);
  });

  it("should toggle todo", () => {
    store.dispatch(addTodo("go shopping"));
    store.dispatch(toggleTodo(1));
    console.log(store.getState());
    const todo = store.getState().todos.find(x => x.completed === true);
    expect(todo.completed).toEqual(true);
  });
});
