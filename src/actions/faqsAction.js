import * as TYPES from './types';

export function getFaqs(data) {
  return {type: TYPES.GET_FAQS, data};
}

export function getFaqsSuccess(data) {
  return {type: TYPES.GET_FAQS_SUCCESS, data};
}

export function getFaqsFailure(data) {
  return {type: TYPES.GET_FAQS_FAILURE, data};
}

export function findUsersWithPhoneNumbers(data) {
  return {type: TYPES.FIND_USERS_WITH_PHONE_NUMBERS, data};
}

export function findUsersWithPhoneNumbersSuccess(data) {
  return {type: TYPES.FIND_USERS_WITH_PHONE_NUMBERS_SUCCESS, data};
}

export function findUsersWithPhoneNumbersFailure(data) {
  return {type: TYPES.FIND_USERS_WITH_PHONE_NUMBERS_FAILURE, data};
}
