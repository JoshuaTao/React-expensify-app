import selectExpenses from "../../selectors/expenses";
import moment from "moment";
let expenses = [
  {
    description: "Gas Bill",
    note: "",
    amount: 231,
    createAt: 0
  },
  {
    description: "Rent",
    note: "",
    amount: 342,
    createAt: moment(0)
      .subtract("4", "days")
      .valueOf()
  },
  {
    description: "Drink",
    note: "",
    amount: 454,
    createAt: moment(0)
      .add("5", "months")
      .valueOf()
  }
];

//filter by text
test("select expenses", () => {
  let filters = {
    text: "i",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  expect(selectExpenses(expenses, filters)).toEqual([expenses[2], expenses[0]]);
});

//sort by amount
test("select expenses", () => {
  let filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  expect(selectExpenses(expenses, filters)).toEqual([
    expenses[2],
    expenses[1],
    expenses[0]
  ]);
});

//sort by date
test("select expenses", () => {
  let filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  expect(selectExpenses(expenses, filters)).toEqual([
    expenses[2],
    expenses[0],
    expenses[1]
  ]);
});

//filter by startDate
test("select expenses", () => {
  let filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0).subtract(1, "days"),
    endDate: undefined
  };
  expect(selectExpenses(expenses, filters)).toEqual([expenses[2], expenses[0]]);
});

//filter by endDate
test("select expenses", () => {
  let filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).add(2, "days")
  };
  expect(selectExpenses(expenses, filters)).toEqual([expenses[0], expenses[1]]);
});
