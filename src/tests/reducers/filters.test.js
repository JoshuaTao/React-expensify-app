import filterReducer from "../../reducers/filters";
import moment from "moment";

test("set text filter", () => {
  expect(
    filterReducer(undefined, { type: "SET_TEXT_FILTER", text: "de" })
  ).toEqual({
    text: "de",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("sort by amount", () => {
  expect(filterReducer(undefined, { type: "SORT_BY_AMOUNT" })).toEqual({
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("sort by date", () => {
  expect(
    filterReducer(
      {
        text: "",
        sortBy: "amount",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
      },
      { type: "SORT_BY_DATE" }
    )
  ).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("set start date", () => {
  expect(
    filterReducer(undefined, {
      type: "SET_START_DATE",
      startDate: moment(0).subtract(40, "days")
    })
  ).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment(0).subtract(40, "days"),
    endDate: moment().endOf("month")
  });
});

test("set end date", () => {
  expect(
    filterReducer(undefined, {
      type: "SET_END_DATE",
      endDate: moment(0).add(2, "months")
    })
  ).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment(0).add(2, "months")
  });
});
