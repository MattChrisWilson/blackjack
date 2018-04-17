import { SET_DIFFICULTY, SET_DEALER_HAND, SET_PLAYER_HAND, DECLARE_RESULT, SET_PLAYER_STICK, RESET_GAME } from '../core/constants';

export const setDifficulty = (data) => {return { type: SET_DIFFICULTY, payload: data }};
export const setDealerHand = (data) => {return { type: SET_DEALER_HAND, payload: data }};
export const setPlayerHand = (data) => {return { type: SET_PLAYER_HAND, payload: data }};
export const declareResult = (data) => {return { type: DECLARE_RESULT, payload: data }};
export const setPlayerStick = () => {return { type: SET_PLAYER_STICK }};
export const resetGame = () => {return { type: RESET_GAME }};