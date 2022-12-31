import * as TYPES from '../actions/types';

const initialState = {
  listOfCategories: null,
  categoriesLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_CATEGORIES:
      return {...state, categoriesLoading: true};
    case TYPES.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        listOfCategories: action.data,
        categoriesLoading: false,
      };
    case TYPES.GET_CATEGORIES_FAILURE:
      return {...state, listOfCategories: [], categoriesLoading: false};

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
