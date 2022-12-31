import * as TYPES from './types';

export function getFeed(data) {
  return {type: TYPES.GET_FEED, data};
}

export function getFeedSuccess(data) {
  return {type: TYPES.GET_FEED_SUCCESS, data};
}

export function getFeedFailure(data) {
  return {type: TYPES.GET_FEED_FAILURE, data};
}
