import moment from "moment";
//Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      let startDateMatch = startDate
        ? moment(expense.createAt).isSameOrAfter(startDate)
        : true;
      let endDateMatch = endDate
        ? moment(expense.createAt).isSameOrBefore(endDate)
        : true;
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
