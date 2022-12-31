import * as TYPES from './types';

export function getClosetPolicies(data) {
  return {type: TYPES.GET_CLOSET_POLICIES, data};
}

export function getClosetPoliciesSuccess(data) {
  return {type: TYPES.GET_CLOSET_POLICIES_SUCCESS, data};
}

export function getClosetPoliciesFailure(data) {
  return {type: TYPES.GET_CLOSET_POLICIES_FAILURE, data};
}
