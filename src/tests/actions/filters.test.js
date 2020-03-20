import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../../actions/filters";
import moment from "moment";

test("set start date", () => {
  expect(setStartDate(moment(0))).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("set end date", () => {
  expect(setEndDate(moment(0))).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

test("set text filter", () => {
  expect(setTextFilter("he")).toEqual({
    type: "SET_TEXT_FILTER",
    text: "he"
  });
});

test("sort by amount", () => {
  expect(sortByAmount()).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});

test("sort by date", () => {
  expect(sortByDate()).toEqual({
    type: "SORT_BY_DATE"
  });
});
