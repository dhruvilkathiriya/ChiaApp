import * as TYPES from './types';

export function editProfile(data) {
  return {type: TYPES.EDIT_PROFILE_START, data};
}

export function editProfileSuccess(data) {
  return {type: TYPES.EDIT_PROFILE_SUCCESS, data};
}

export function editProfileFailure(data) {
  return {type: TYPES.EDIT_PROFILE_FAILURE, data};
}

export function getProfile() {
  return {type: TYPES.GET_PROFILE_START};
}

export function getProfileFailure(data) {
  return {type: TYPES.GET_PROFILE_FAILURE, data};
}
