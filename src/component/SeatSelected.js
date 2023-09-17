import React, { Component } from "react";
import { connect } from "react-redux";
class SeatSelected extends Component {
  render() {
    let { seatPending } = this.props;
    return (
      <div className="col-span-3 h-[100vh] overflow-y-scroll scroll-m-2">
        <h1 className="py-6 text-3xl font-bold">DANH SÁCH GHẾ BẠN CHỌN</h1>
        <div className="flex gap-3">
          <span className="w-6 h-6 mb-2 bg-orange-500 border-green-500 rounded-sm shadow shadow-orange-500 "></span>
          <span className="font-semibold">Ghế đã đặt</span>
        </div>
        <div className="flex gap-3">
          <span className="w-6 h-6 mb-2 bg-green-500 border-green-500 rounded-sm shadow shadow-green-500 "></span>
          <span className="font-semibold">Ghế đang chọn</span>
        </div>
        <div className="flex gap-3">
          <span className="w-6 h-6 mb-2 bg-white  rounded-sm shadow shadow-orange-500 border border-orange-500 "></span>
          <span className="font-semibold">Ghế chưa đặt</span>
        </div>
        <table className="w-full border border-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-white">Số ghế</th>
              <th className="px-4 py-2 border border-white">Giá</th>
              <th className="px-4 py-2 border border-white">Hủy</th>
            </tr>
          </thead>
          <tbody className="">
            {seatPending.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-white">{item.soGhe}</td>
                <td className="px-4 py-2 border border-white">
                  {item.gia.toLocaleString()}
                </td>
                <td className="px-4 py-2 border border-white flex justify-center ">
                  <button
                    onClick={() => {
                      this.props.deselectSeat(item);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer transition-all hover:text-red-500 hover:scale-110"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {seatPending.length > 0 && (
            <tfoot>
              <tr>
                <td className="px-4 py-2 border border-white">Tổng tiền</td>
                <td className="px-4 py-2 border border-white">
                  {seatPending
                    .reduce((prev, curr) => prev + curr.gia, 0)
                    .toLocaleString()}
                </td>
                <td className="px-4 py-2 border border-white" />
              </tr>
            </tfoot>
          )}
        </table>
        <button className="py-2 px-4 rounded-lg bg-blue-500 text-white shadow shadow-blue-500 mt-6">
          Thanh toán
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    seatPending: state.seat.seatPending,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deselectSeat: (seat) => {
      return dispatch({ type: "DESELECT_SEAT", payload: seat });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatSelected);
