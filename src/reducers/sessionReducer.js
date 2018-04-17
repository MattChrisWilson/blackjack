import { EASY, MEDIUM, HARD, SET_DIFFICULTY, SET_DEALER_SCORE, SET_PLAYER_SCORE, SET_GAME_HISTORY } from '../core/constants';

const defaultProps = {
    deck: [
        {name: "a1", value: [1, 11]}, 
        {name: "a2", value: 2}, 
        {name: "a3", value: 3}, 
        {name: "a4", value: 4}, 
        {name: "a5", value: 5}, 
        {name: "a6", value: 6}, 
        {name: "a7", value: 7}, 
        {name: "a8", value: 8}, 
        {name: "a9", value: 9}, 
        {name: "a10", value: 10}, 
        {name: "aj", value: 10}, 
        {name: "aq", value: 10}, 
        {name: "ak", value: 10}, 
        {name: "s1", value: [1, 11]}, 
        {name: "s2", value: 2}, 
        {name: "s3", value: 3}, 
        {name: "s4", value: 4}, 
        {name: "s5", value: 5}, 
        {name: "s6", value: 6}, 
        {name: "s7", value: 7}, 
        {name: "s8", value: 8}, 
        {name: "s9", value: 9}, 
        {name: "s10", value: 10}, 
        {name: "sj", value: 10}, 
        {name: "sq", value: 10}, 
        {name: "sk", value: 10}, 
        {name: "d1", value: [1, 11]}, 
        {name: "d2", value: 2}, 
        {name: "d3", value: 3}, 
        {name: "d4", value: 4}, 
        {name: "d5", value: 5}, 
        {name: "d6", value: 6}, 
        {name: "d7", value: 7}, 
        {name: "d8", value: 8}, 
        {name: "d9", value: 9}, 
        {name: "d10", value: 10}, 
        {name: "dj", value: 10}, 
        {name: "dq", value: 10}, 
        {name: "dk", value: 10}, 
        {name: "h1", value: [1, 11]}, 
        {name: "h2", value: 2}, 
        {name: "h3", value: 3}, 
        {name: "h4", value: 4}, 
        {name: "h5", value: 5}, 
        {name: "h6", value: 6}, 
        {name: "h7", value: 7}, 
        {name: "h8", value: 8}, 
        {name: "h9", value: 9}, 
        {name: "h10", value: 10}, 
        {name: "hj", value: 10}, 
        {name: "hq", value: 10}, 
        {name: "hk", value: 10}, 
    ],
    difficulty: MEDIUM,
    dealerScore: 0,
    playerScore: 0,
    history: [],
};

export default function(state = { ...defaultProps }, action) {
    switch(action.type) {
        case SET_DIFFICULTY:
        return state;
        case SET_DEALER_SCORE:
        return { ...state, dealerScore: action.payload };
        case SET_PLAYER_SCORE:
        return { ...state, playerScore: action.payload };
        case SET_GAME_HISTORY:
        return { ...state, history: [ ...state.history, action.payload ]};
        default:
        return state;
    }
}