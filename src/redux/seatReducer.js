const initialState = {
  seat: [],
};

const seatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_SEAT": {
      console.log("add");
      let newSeat = [...state.seat];

      newSeat.push({ ...action.payload, isChecked: true });
      console.log(newSeat);
      return {
        ...state,
        seat: newSeat,
      };
    }
    case "DESELECT_SEAT": {
      console.log("del");
      let newSeat = [...state.seat];
      let index = newSeat.findIndex((item) => {
        return item.soGhe === action.payload.soGhe;
      });
      newSeat.splice(index, 1);
      return {
        ...state,
        seat: newSeat,
      };
    }

    default:
      return state;
  }
};

export default seatReducer;
