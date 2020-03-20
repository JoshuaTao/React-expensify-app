import moment from "moment";
export default [
  {
    id: 1,
    description: "Apple",
    note: "fruit 1",
    amount: 200,
    createAt: moment(0).valueOf()
  },
  {
    id: 2,
    description: "Orange",
    note: "fruit 2",
    amount: 130,
    createAt: moment(0)
      .add(4, "days")
      .valueOf()
  },
  {
    id: 3,
    description: "Banana",
    note: "fruit 3",
    amount: 170,
    createAt: moment(0)
      .subtract(2, "days")
      .valueOf()
  }
];
