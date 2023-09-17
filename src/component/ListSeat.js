import React, { Component } from "react";
import { seatArr } from "../data/seatData";
import Seat from "./Seat";
import { connect } from "react-redux";

class ListSeat extends Component {
  render() {
    let { seatPending } = this.props;
    return (
      <div
        style={{
          perspective: "1000px",
        }}
        className="flex flex-col items-center col-span-7 "
      >
        <h1 className="mb-5 text-4xl font-bold">ĐẶT VÉ XEM PHIM</h1>
        <h4 className="text-xl font-semibold">Màn hình</h4>
        <div
          style={{
            backgroundColor: "#fff",
            height: "70px",
            width: "500px",
            transform: "rotateX(-45deg)",
            boxShadow: "0 3px 10px rgba(255,255,255,0.75)",
          }}
          className=""
        ></div>
        <table cellSpacing="10px">
          {seatArr &&
            seatArr.map((seatList, index) => {
              if (seatList.hang === "") {
                return (
                  <thead key={index} className="text-center">
                    <tr>
                      <th>{seatList.hang}</th>
                      {seatList.danhSachGhe.map((item, index) => (
                        <td key={index}>{item.soGhe}</td>
                      ))}
                    </tr>
                  </thead>
                );
              } else {
                return (
                  <tbody key={index}>
                    <tr>
                      <td>{seatList.hang}</td>
                      {seatList.danhSachGhe.map((item, index) => (
                        <td key={index}>
                          <Seat
                            isChecked={seatPending.includes(item) || false}
                            item={item}
                          />
                        </td>
                      ))}
                    </tr>
                  </tbody>
                );
              }
            })}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seatPending: state.seat.seatPending,
  };
};

export default connect(mapStateToProps)(ListSeat);
