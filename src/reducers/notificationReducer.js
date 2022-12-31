import * as TYPES from '../actions/types';

const initialState = {
  notificationStatus: {},
  notificationStatusLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.TURN_ON_OFF_NOTIFICATION:
      return {
        ...state,
        notificationStatusLoading: true,
      };
    case TYPES.TURN_ON_OFF_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notificationStatus: action.data,
        notificationStatusLoading: false,
      };
    case TYPES.TURN_ON_OFF_NOTIFICATION_FAILURE:
      return {
        ...state,
        notificationStatus: {},
        notificationStatusLoading: false,
      };

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
