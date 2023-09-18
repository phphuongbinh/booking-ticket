import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "antd";
class SeatSelected extends Component {
  handlePayment = () => {
    if (this.props.seats.length === 0) {
      Modal.warning({
        title: "Chưa chọn vị trí",
        content: "Vui lòng chọn ghế ngồi",
      });
    } else {
      this.props.paymentSeat(this.props.seats);
      Modal.success({
        title: "Thanh toán thành công",
        content: "Vui lòng đến trước 30 phút khi phim bắt đầu",
      });
    }
  };
  render() {
    let { seats } = this.props;
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
        <table className="w-full border border-white ">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-white">Số ghế</th>
              <th className="px-4 py-2 border border-white">Giá</th>
              <th className="px-4 py-2 border border-white">Hủy</th>
            </tr>
          </thead>
          <tbody className="">
            {seats.map((item, index) => (
              <tr key={index} className="font-bold text-yellow-400">
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
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer transition-all text-red-500 hover:scale-110"
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
          {seats.length > 0 && (
            <tfoot className="font-bold">
              <tr>
                <td className="px-4 py-2 border border-white">Tổng tiền</td>
                <td className="px-4 py-2 border border-white font-bold text-yellow-400">
                  {seats
                    .reduce((prev, curr) => prev + curr.gia, 0)
                    .toLocaleString()}
                </td>
                <td className="px-4 py-2 border border-white" />
              </tr>
            </tfoot>
          )}
        </table>
        <Button
          type="primary"
          className="bg-blue-500 shadow shadow-blue-500 border-blue-500 mt-4 font-semibold text-md"
          onClick={this.handlePayment}
        >
          Thanh toán
        </Button>
      </div>
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
    deselectSeat: (seat) => {
      return dispatch({ type: "DESELECT_SEAT", payload: seat });
    },
    paymentSeat: (seats) => {
      return dispatch({ type: "PAYMENT", payload: seats });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatSelected);
