import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboardPage from "../../components/NotFoundPage";

test("render Expense Dashboard Page", () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
