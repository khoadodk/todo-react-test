import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import "jsdom-global/register";
import { render, fireEvent } from "@testing-library/react";

import App from "../../components/App";
import rootReducer from "../../reducers";

/* https://testing-library.com/docs/example-input-event
1. create the store
2. find the input with data test attribute
3. add the value to the input 
4. fire the event button
5. get the li element
*/

const store = createStore(rootReducer);

describe("Connected component full app integration test", () => {
  it("should add todo item using fire event", () => {
    const { container, getByTestId, getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputElement = getByTestId("add-todo-input");
    fireEvent.change(inputElement, { target: { value: "buy milk" } });
    fireEvent.click(getByText("Add Todo"));

    const liElement = container.querySelector("li");
    expect(liElement.textContent).toBe("buy milk");
  });
});
