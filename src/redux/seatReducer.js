const initialState = {
  seats: [],
};

const seatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DESELECT_SEAT": {
      let newSeats = [...state.seats];
      let index = newSeats.findIndex(
        (item) => item.soGhe === action.payload.soGhe
      );
      newSeats.splice(index, 1);
      return { ...state, seats: newSeats };
    }

    case "SELECT_SEAT": {
      let newPending = [...state.seats];
      if (!newPending.includes(action.payload)) {
        newPending.push(action.payload);
      }
      return { ...state, seats: newPending };
    }
    case "PAYMENT": {
      return { ...state, seats: [] };
    }

    default:
      return state;
  }
};

export default seatReducer;
