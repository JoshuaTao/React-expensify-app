import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = "",
  createAt = ""
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createAt
  }
});

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

//SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

//SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

//SET_START_DATE
const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

//SET_END_DATE
const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});

//EXPENSE REDUCER
let expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(expense => expense.id != action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

//FILTER REDUCER
let filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      let startDateMatch =
        typeof startDate !== "number" || expense.createAt >= startDate;
      let endDateMatch =
        typeof endDate !== "number" || expense.createAt <= endDate;
      let textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return b.createAt - a.createAt;
      } else {
        return b.amount - a.amount;
      }
    });
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

const unsubscribe = store.subscribe(() => {
  let state = store.getState();
  let expenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(expenses);
});

let expenseOne = store.dispatch(
  addExpense({
    description: "Rent",
    amount: 200,
    createAt: 1002
  })
);

let expenseTwo = store.dispatch(
  addExpense({
    description: "Coffee",
    amount: 500,
    createAt: 2000
  })
);

let expenseThree = store.dispatch(
  addExpense({
    description: "Coffee",
    amount: 900,
    createAt: 300
  })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 300 }));

// store.dispatch(setTextFilter("rent"));

// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());

store.dispatch(sortByDate());

// store.dispatch(setStartDate(134));

// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1500));

// store.dispatch(setTextFilter("rent"));

// const demoState = {
//   expenses: [
//     {
//       id: "ssjwiewdjhd",
//       description: "a new car",
//       note: "my wedding gift",
//       amount: 32454,
//       createdAt: 0
//     }
//   ],
//   filters: {
//     text: "rent",
//     sortBy: "amount",
//     startDate: undefined,
//     endDate: undefined
//   }
// };
