import React, { Component } from "react";
import { connect } from "react-redux";
import { message } from "antd";

class Seat extends Component {
  handleClickSeat = (item) => {
    if (item.daDat) {
      console.log("Đã đặt");
      message.warning("Ghế đã đặt rồi");
    } else {
      this.props.selectSeat(item);
    }
  };
  render() {
    let { item, isChecked } = this.props;
    return (
      <div
        onClick={() => {
          this.handleClickSeat(item);
        }}
        className={`w-6 h-6 border rounded-sm shadow-sm cursor-pointer m-1    ${
          item.daDat
            ? "bg-orange-500 border-orange-400 shadow-orange-400"
            : isChecked
            ? "bg-green-500 shadow-green-400 border-green-400"
            : "bg-white shadow-orange-400 border-orange-400"
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
    selectSeat: (seat) => {
      return dispatch({ type: "SELECT_SEAT", payload: seat });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Seat);
