const initialState = {
  seatPending: [],
};

const seatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DESELECT_SEAT": {
      let newSeats = [...state.seatPending];
      let index = newSeats.findIndex(
        (item) => item.soGhe === action.payload.soGhe
      );
      newSeats.splice(index, 1);
      return { ...state, seatPending: newSeats };
    }

    case "SELECT_SEAT": {
      let newPending = [...state.seatPending];
      if (!newPending.includes(action.payload)) {
        newPending.push(action.payload);
      }
      return { ...state, seatPending: newPending };
    }

    default:
      return state;
  }
};

export default seatReducer;
