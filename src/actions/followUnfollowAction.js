import * as TYPES from './types';

export function followUser(data) {
  return {type: TYPES.FOLLOW_START, data};
}

export function followUserSuccess(data) {
  return {type: TYPES.FOLLOW_SUCCESS, data};
}

export function followUserFailure() {
  return {type: TYPES.FOLLOW_FAILURE};
}

export function unfollowUser(data) {
  return {type: TYPES.UNFOLLOW_START, data};
}

export function unfollowUserSuccess(data) {
  return {type: TYPES.UNFOLLOW_SUCCESS, data};
}

export function unfollowUserFailure() {
  return {type: TYPES.UNFOLLOW_FAILURE};
}
