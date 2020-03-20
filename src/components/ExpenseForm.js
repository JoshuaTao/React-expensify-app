import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      amount: props.expense ? props.expense.amount : "",
      createAt: props.expense ? moment(props.expense.createAt) : moment(),
      focused: false,
      note: props.expense ? props.expense.note : "",
      error: ""
    };
  }

  onDescriptionChange = e => {
    let description = e.target.value;
    this.setState(() => ({
      description
    }));
  };

  onAmountChange = e => {
    let amount = e.target.value;
    if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount
      }));
    }
  };

  onNoteChange = e => {
    let note = e.target.value;
    this.setState(() => ({
      note
    }));
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: "Please provide description and amount" }));
    } else {
      this.setState(() => ({
        error: ""
      }));
      this.props.onSubmit({
        description: this.state.description,
        note: this.state.note,
        amount: parseFloat(this.state.amount),
        createAt: this.state.createAt.valueOf()
      });
    }
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.state.error && <p>{this.state.error}</p>}
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />

        <SingleDatePicker
          date={this.state.createAt}
          onDateChange={date => {
            if (date) {
              this.setState({ createAt: date });
            }
          }}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          value={this.state.note}
          onChange={this.onNoteChange}
        ></textarea>
        <button>Add Expense</button>
      </form>
    );
  }
}
