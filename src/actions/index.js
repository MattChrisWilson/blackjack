import { SET_DIFFICULTY, SET_DEALER_SCORE, SET_PLAYER_SCORE } from '../core/constants';

export const setDifficulty = (data) => {return { type: SET_DIFFICULTY, payload: data }};
export const setDealerScore = (data) => {return { type: SET_DEALER_SCORE, payload: data }};
export const setPlayerScore = (data) => {return { type: SET_PLAYER_SCORE, payload: data }};