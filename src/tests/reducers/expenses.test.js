import expenses from "../fixtures/expenses";
import expensesReducer from "../../reducers/expenses";
import moment from "moment";

test("set default expenses", () => {
  const state = expensesReducer(expenses, { type: "@@INIT" });
  expect(state).toEqual(expenses);
});

test("add expense", () => {
  const expense = {
    id: 4,
    description: "peach",
    note: "fruit 4",
    amount: 210,
    createAt: moment(0)
      .add(5, "days")
      .valueOf()
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  expect(expensesReducer(expenses, action)).toEqual([...expenses, expense]);
});

test("remove expense", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: 2
  };
  expect(expensesReducer(expenses, action)).toEqual([expenses[0], expenses[2]]);
});

test("remove expense", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: 5
  };
  expect(expensesReducer(expenses, action)).toEqual([
    expenses[0],
    expenses[1],
    expenses[2]
  ]);
});

test("edit expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: 3,
    updates: {
      description: "pineapple"
    }
  };
  expect(expensesReducer(expenses, action)).toEqual([
    expenses[0],
    expenses[1],
    {
      id: 3,
      description: "pineapple",
      note: "fruit 3",
      amount: 170,
      createAt: moment(0)
        .subtract(2, "days")
        .valueOf()
    }
  ]);
});

test("edit expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: 5,
    updates: {
      description: "bike"
    }
  };
  expect(expensesReducer(expenses, action)).toEqual(expenses);
});
