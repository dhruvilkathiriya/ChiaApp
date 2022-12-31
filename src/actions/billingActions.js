import * as TYPES from './types';

export function cardSetUpIntent(data) {
    return {type: TYPES.CARD_SETUP_INTENT, data};
}

export function cardSetUpIntentSuccess(data) {
    return {type: TYPES.CARD_SETUP_INTENT_SUCCESS, data};
}

export function cardSetUpIntentFailure(data) {
    return {type: TYPES.CARD_SETUP_INTENT_FAILURE, data};
}

export function addCard(data) {
    return {type: TYPES.ADD_CARD, data};
}

export function addCardSuccess(data) {
    return {type: TYPES.ADD_CARD_SUCCESS, data};
}

export function addCardFailure(data) {
    return {type: TYPES.ADD_CARD_FAILURE, data};
}

export function getUserCards(data) {
    return {type: TYPES.GET_USER_CARDS, data};
}

export function getUserCardsSuccess(data) {
    return {type: TYPES.GET_USER_CARDS_SUCCESS, data};
}

export function getUserCardsFailure(data) {
    return {type: TYPES.GET_USER_CARDS_FAILURE, data};
}
