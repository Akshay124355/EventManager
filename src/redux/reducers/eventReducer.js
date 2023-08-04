
const initialState = {
  events: [],
  filteredEvents: [],
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case "DELETE_EVENT":
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
      };
    case "UPDATE_EVENT":
      const updatedEvents = state.events.map((event) =>
        event.id === action.payload.id ? action.payload : event
      );
      return {
        ...state,
        events: updatedEvents,
      };
    case "FILTER_EVENTS":
      const filteredEvent = state.events.filter((event) =>
        event.eventType === action.payload
      );
      return {
        ...state,
        filteredEvents: filteredEvent,
      };
    default:
      return state;
  }
};

export default eventReducer;
