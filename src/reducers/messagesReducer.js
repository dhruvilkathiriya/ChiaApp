import _ from 'lodash';

import * as TYPES from '../actions/types';

const initialState = {
  rooms: [],
  roomsLoading: false,
  messages: [],
  messagesLoading: false,
  page: 1,
  hasNextPage: true,
  limit: 10,
  oldMessagesLoading: false,
  newUserRoom: {},
  scrollToEnd: true,
  room: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_ROOMS:
      return {
        ...state,
        rooms: [],
        roomsLoading: true,
      };
    case TYPES.GET_ROOMS_SUCCESS:
      return {
        ...state,
        rooms: _.get(action, 'data.docs', []),
        roomsLoading: false,
      };
    case TYPES.GET_ROOMS_FAILURE:
      return {
        ...state,
        feed: [],
        roomsLoading: false,
      };

    case TYPES.CREATE_ROOM:
      return {...state, roomsLoading: true, newUserRoom: {}};
    case TYPES.CREATE_ROOM_SUCCESS:
      return {...state, roomsLoading: false, newUserRoom: action?.data};
    case TYPES.CREATE_ROOM_FAILURE:
      return {...state, roomsLoading: false};

    case TYPES.GET_MESSAGE:
      return {
        ...state,
        oldMessagesLoading: true,
        page: action.data.page,
      };
    case TYPES.GET_MESSAGE_SUCCESS:
      return {
        ...state,
        messages:
          action?.data?.page === 1
            ? _.reverse(_.get(action, 'data.docs', []))
            : _.reverse(
                _.reverse(state.messages).concat(
                  _.get(action, 'data.docs', []),
                ),
              ),
        page: action.data.page,
        hasNextPage: action.data.hasNextPage,
        oldMessagesLoading: false,
        scrollToEnd: action?.data?.page === 1,
      };
    case TYPES.GET_MESSAGE_FAILURE:
      return {
        ...state,
        oldMessagesLoading: false,
      };

    case TYPES.ADD_NEW_MESSAGE:
      const newMessages = [...state.messages, _.get(action, 'data', {})];
      return {
        ...state,
        messages: _.unionBy(newMessages, 'id'),
        messagesLoading: false,
        scrollToEnd: true,
      };

    case TYPES.SET_ROOM_ID:
      return {...state, room: action?.data?.roomId};

    case TYPES.REMOVE_ROOM_ID:
      return {...state, room: ''};

    case TYPES.CREATE_MESSAGE:
      return {...state, messagesLoading: true};
    case TYPES.CREATE_MESSAGE_SUCCESS:
      return {...state, messagesLoading: false};
    case TYPES.CREATE_MESSAGE_FAILURE:
      return {...state, messagesLoading: false};

    case TYPES.CLEAR_MESSAGES_DATA:
      return {
        ...state,
        messages: [],
        messagesLoading: false,
      };

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
