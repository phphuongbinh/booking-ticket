import React, { Component } from "react";
import ListSeat from "../component/ListSeat";
import SeatSelected from "../component/SeatSelected";

export default class BookingPage extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./bgmovie.jpg)",
        }}
        className="relative h-[100vh] bg-cover bg-no-repeat "
      >
        <div className="container mx-auto max-w-7xl">
          <div className="absolute inset-0 z-10 bg-black bg-opacity-50"></div>
          <div className="relative z-20 grid grid-cols-10 text-white">
            <ListSeat />
            <SeatSelected />
          </div>
        </div>
      </div>
    );
  }
}
