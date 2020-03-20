import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("remove expense", () => {
  let id = "asd123";
  expect(removeExpense({ id })).toEqual({
    type: "REMOVE_EXPENSE",
    id: "asd123"
  });
});

test("edit expense", () => {
  let id = "asd123";
  expect(editExpense("asd123", { description: "Apple", amount: 243 })).toEqual({
    type: "EDIT_EXPENSE",
    id: "asd123",
    updates: {
      description: "Apple",
      amount: 243
    }
  });
});

test("add expense", () => {
  let expense = {
    description: "apple",
    note: "my favorite fruit",
    amount: 234,
    createAt: 21333
  };
  expect(addExpense(expense)).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expense,
      id: expect.any(String)
    }
  });
});

test("add expense", () => {
  let expense = "";
  expect(addExpense(expense)).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: "",
      createAt: "",
      id: expect.any(String)
    }
  });
});
