import * as TYPES from './types';

export function turnOnOffNotification(data) {
  return {type: TYPES.TURN_ON_OFF_NOTIFICATION, data};
}

export function turnOnOffNotificationSuccess(data) {
  return {type: TYPES.TURN_ON_OFF_NOTIFICATION_SUCCESS, data};
}

export function turnOnOffNotificationFailure(data) {
  return {type: TYPES.TURN_ON_OFF_NOTIFICATION_FAILURE, data};
}
