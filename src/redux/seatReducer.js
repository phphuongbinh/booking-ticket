const initialState = {
  isChecked: false,
  seat: [],
};

const seatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_SEAT":
      console.log("okemen");
      return state;

    default:
      return state;
  }
};

export default seatReducer;
