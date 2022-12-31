import * as TYPES from './types';

export function getSiteSettings(data) {
  return {type: TYPES.GET_SITE_SETTING, data};
}

export function getSiteSettingsSuccess(data) {
  return {type: TYPES.GET_SITE_SETTING_SUCCESS, data};
}

export function getSiteSettingsFailure(data) {
  return {type: TYPES.GET_SITE_SETTING_FAILURE, data};
}
