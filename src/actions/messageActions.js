import * as TYPES from './types';

/**
 * Get messages
 */
export function getMessages(data) {
  return {type: TYPES.GET_MESSAGE, data};
}

export function getMessagesSuccess(data) {
  return {type: TYPES.GET_MESSAGE_SUCCESS, data};
}

export function getMessagesFailure(data) {
  return {type: TYPES.GET_MESSAGE_FAILURE, data};
}

/**
 * Add new messages
 */
export function addNewMessage(data) {
  return {type: TYPES.ADD_NEW_MESSAGE, data};
}

/**
 * Set RoomId
 */
export function setRoomId(data) {
  return {type: TYPES.SET_ROOM_ID, data};
}

/**
 * Remove RoomId
 */
export function removeRoomId(data) {
  return {type: TYPES.REMOVE_ROOM_ID, data};
}

/**
 * Clear messages data
 */
export function clearMessagesData() {
  return {type: TYPES.CLEAR_MESSAGES_DATA};
}

/**
 * Create messages
 */
export function createMessage(data) {
  return {type: TYPES.CREATE_MESSAGE, data};
}

export function createMessageSuccess(data) {
  return {type: TYPES.CREATE_MESSAGE_SUCCESS, data};
}

export function createMessageFailure(data) {
  return {type: TYPES.CREATE_MESSAGE_FAILURE, data};
}

/**
 * Get rooms
 */
export function getRooms(data) {
  return {type: TYPES.GET_ROOMS, data};
}

export function getRoomsSuccess(data) {
  return {type: TYPES.GET_ROOMS_SUCCESS, data};
}

export function getRoomsFailure(data) {
  return {type: TYPES.GET_ROOMS_FAILURE, data};
}

/**
 * Create room
 */
export function createRoom(data) {
  return {type: TYPES.CREATE_ROOM, data};
}

export function createRoomSuccess(data) {
  return {type: TYPES.CREATE_ROOM_SUCCESS, data};
}

export function createRoomFailure(data) {
  return {type: TYPES.CREATE_ROOM_FAILURE, data};
}
