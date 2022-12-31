import * as TYPES from './types';

export function addAddress(data) {
  return {type: TYPES.ADD_ADDRESS, data};
}

export function addAddressSuccess() {
  return {type: TYPES.ADD_ADDRESS_SUCCESS};
}

export function addAddressFailure() {
  return {type: TYPES.ADD_ADDRESS_FAILURE};
}

export function editAddress(data, addressID) {
  return {type: TYPES.EDIT_ADDRESS, data, addressID};
}

export function editAddressSuccess() {
  return {type: TYPES.EDIT_ADDRESS_SUCCESS};
}

export function editAddressFailure() {
  return {type: TYPES.EDIT_ADDRESS_FAILURE};
}
