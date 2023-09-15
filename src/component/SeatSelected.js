import React, { Component } from "react";
export default class SeatSelected extends Component {
  render() {
    return (
      <div className="col-span-3">
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
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-white">A1</td>
              <td className="px-4 py-2 border border-white">j150.000</td>
              <td className="px-4 py-2 border border-white">X</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-white">A1</td>
              <td className="px-4 py-2 border border-white">j150.000</td>
              <td className="px-4 py-2 border border-white">X</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-white">A1</td>
              <td className="px-4 py-2 border border-white">j150.000</td>
              <td className="px-4 py-2 border border-white">X</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="px-4 py-2 border border-white">Tổng tiền</td>
              <td className="px-4 py-2 border border-white">450.000</td>
              <td className="px-4 py-2 border border-white" />
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
