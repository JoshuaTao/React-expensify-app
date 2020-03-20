import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

// const unsubscribe = store.subscribe(() => {
//   let state = store.getState();
//   let expenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(expenses);
// });

// let expenseOne = store.dispatch(
//   addExpense({
//     description: "Water Bill",
//     amount: 200,
//     createAt: 500
//   })
// );

// let expenseTwo = store.dispatch(
//   addExpense({
//     description: "Gas Bill",
//     amount: 500,
//     createAt: 1030
//   })
// );

// let expenseThree = store.dispatch(
//   addExpense({
//     description: "Rent",
//     amount: 800,
//     createAt: 120
//   })
// );

// store.dispatch(setTextFilter("Water"));

// setTimeout(() => {
//   store.dispatch(setTextFilter("Bill"));
// }, 3000);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
