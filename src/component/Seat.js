import React, { Component } from "react";
import { connect } from "react-redux";

class Seat extends Component {
  state = {
    isChecked: false,
  };
  render() {
    let seatItem = this.props.item;
    console.log(this.props.seatMovie);
    return (
      <div
        onClick={() => {
          if (seatItem.daDat) {
            console.log("Đã đặt");
          } else {
            if (this.state.isChecked) {
              console.log("Bạn đã chọn rồi");
            } else {
              this.setState({ isChecked: true });
              this.props.selectSeat(seatItem);
            }
          }
        }}
        className={`w-6 h-6  border rounded-sm shadow-sm cursor-pointer  m-1 ${
          seatItem.daDat
            ? "bg-orange-500 border-orange-400 shadow-orange-400"
            : `${
                this.state.isChecked
                  ? "bg-green-500 border-green-400 shadow-green-400"
                  : "bg-white border-orange-400 shadow-orange-400"
              }`
        }
        
        `}
      ></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seatMovie: state.seat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectSeat: (seat) => {
      return dispatch({ type: "SELECT_SEAT", payload: seat });
    },
    deselectSeat: (seat) => {
      return dispatch({ type: "DESELECT_SEAT", payload: seat });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Seat);
