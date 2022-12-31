import * as TYPES from '../actions/types';

const initialState = {
  faqs: null,
  faqsLoading: false,
  userList: [],
  userListLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_FAQS:
      return {...state, faqs: action.data, faqsLoading: true};
    case TYPES.GET_FAQS_SUCCESS:
      return {...state, faqs: action.data, faqsLoading: false};
    case TYPES.GET_FAQS_FAILURE:
      return {...state, faqs: action.data, faqsLoading: false};

    case TYPES.FIND_USERS_WITH_PHONE_NUMBERS:
      return {
        ...state,
        userListLoading: true,
      };
    case TYPES.FIND_USERS_WITH_PHONE_NUMBERS_SUCCESS:
      return {
        ...state,
        userList: action?.data?.validContacts,
        userListLoading: false,
      };
    case TYPES.FIND_USERS_WITH_PHONE_NUMBERS_FAILURE:
      return {...state, userListLoading: false};

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
