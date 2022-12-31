import * as TYPES from '../actions/types';

const initialState = {
  siteSettings: null,
  siteSettingsLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_SITE_SETTING:
      return {...state, siteSettings: action.data, siteSettingsLoading: true};
    case TYPES.GET_SITE_SETTING_SUCCESS:
      return {...state, siteSettings: action.data, siteSettingsLoading: false};
    case TYPES.GET_SITE_SETTING_FAILURE:
      return {...state, siteSettings: action.data, siteSettingsLoading: false};

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
