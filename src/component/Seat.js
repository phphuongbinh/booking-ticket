import React, { Component } from "react";
import { connect } from "react-redux";

class Seat extends Component {
  render() {
    return (
      <div
        onClick={() => {
          this.props.selectSeat(this.props.item);
        }}
        className={`w-6 h-6  border  rounded-sm shadow-sm cursor-pointer  m-1 ${
          this.props.isChecked
            ? "bg-green-500 border-green-400 shadow-green-400"
            : "bg-white border-orange-400 shadow-orange-400"
        }`}
      ></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seats: state.seat.seats,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectSeat: (seat) => dispatch({ type: "SELECT_SEAT", payload: seat }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Seat);
