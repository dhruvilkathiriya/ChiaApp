import * as TYPES from '../actions/types';

const initialState = {
  subCategories: [],
  isSubCategoriesLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_SUB_CATEGORIES:
      return {
        ...state,
        isSubCategoriesLoading: true,
      };
    case TYPES.GET_SUB_CATEGORIES_SUCCESS:
      return {
        ...state,
        subCategories: action.data,
        isSubCategoriesLoading: false,
      };
    case TYPES.GET_SUB_CATEGORIES_FAILURE:
      return {
        ...state,
        subCategories: [],
        isSubCategoriesLoading: false,
      };

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
