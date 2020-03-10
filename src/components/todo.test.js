import React from "react";
import Todo from "./Todo";
import { configure, shallow, mount } from "enzyme";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

/* SETUP
1.mock any functions and props
2.shallow/deep render component and pass mock func and props to it 
*/

describe("To do component unit tests", () => {
  const mockFn = jest.fn();
  const props = {
    onClick: mockFn,
    completed: false,
    text: "buy milk"
  };

  let component;
  beforeEach(() => {
    component = shallow(<Todo {...props} />);
  });

  it("should render 1 todo component", () => {
    expect(component).toHaveLength(1);
  });

  it("should render component with li element", () => {
    expect(component.find("li")).toHaveLength(1);
  });

  it("should render props correctly", () => {
    // console.log(component.props());
    expect(component.props().children).toEqual("buy milk");
  });

  it("should render a setprops", () => {
    component.setProps({ text: "hello world" });
    expect(component.props().children).toEqual("hello world");
  });

  it("should call onCLick handler when component is clicked", () => {
    component.simulate("click");
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe("To do component styling behavior", () => {
  const mockFn = jest.fn();

  it("should not have linethrough style when Todo is incomplete", () => {
    const component = shallow(
      <Todo onClick={mockFn} completed={false} text="go shopping" />
    );
    expect(component.props().style).toEqual({ textDecoration: "none" });
  });

  it("should have linethrough style when Todo is complete", () => {
    const component = shallow(
      <Todo onClick={mockFn} completed={true} text="go shopping" />
    );
    expect(component.props().style).toEqual({ textDecoration: "line-through" });
  });
});
