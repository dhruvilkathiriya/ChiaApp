import * as TYPES from './types';

export function preSignedURL(data) {
  return {type: TYPES.PRE_SIGNED_URL, data};
}

export function preSignedURLSuccess(data) {
  return {type: TYPES.PRE_SIGNED_URL_SUCCESS, data};
}

export function preSignedURLFailure() {
  return {type: TYPES.PRE_SIGNED_URL_FAILURE};
}

export function resetPreSignedUrl() {
  return {type: TYPES.RESET_PRE_SIGNED_URL};
}
