import { 
    EASY, 
    MEDIUM, 
    HARD, 
    SET_DIFFICULTY, 
    SET_DEALER_HAND, 
    SET_PLAYER_HAND, 
    SET_PLAYER_STICK,
    DECLARE_RESULT,
    RESET_GAME,
} from '../core/constants';

const defaultProps = {
    deck: [
        {name: "c1", value: [1, 11]}, 
        {name: "c2", value: 2}, 
        {name: "c3", value: 3}, 
        {name: "c4", value: 4}, 
        {name: "c5", value: 5}, 
        {name: "c6", value: 6}, 
        {name: "c7", value: 7}, 
        {name: "c8", value: 8}, 
        {name: "c9", value: 9}, 
        {name: "c10", value: 10}, 
        {name: "cj", value: 10}, 
        {name: "cq", value: 10}, 
        {name: "ck", value: 10}, 
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
    dealerHand: [],
    playerHand: [],
    playerStick: false,
    history: [],
};

export default function(state = { ...defaultProps }, action) {
    switch(action.type) {
        case SET_DIFFICULTY:
            return state;
        case SET_DEALER_HAND:
            return { 
                ...state, 
                dealerHand: [ ...state.dealerHand, ...action.payload ], 
                deck: state.deck.filter(card => action.payload.indexOf(card) === -1),
            };
        case SET_PLAYER_HAND:
            return { 
                ...state, 
                playerHand: [ ...state.playerHand, ...action.payload ],
                deck: state.deck.filter(card => action.payload.indexOf(card) === -1),
            };
        case SET_PLAYER_STICK:
            return { ...state, playerStick: true };
        case DECLARE_RESULT:
            return { ...state, history: [ ...state.history, action.payload ]};
        case RESET_GAME:
            return { 
                ...state, 
                deck: [ ...defaultProps.deck ],
                dealerHand: [],
                playerHand: [],
                playerStick: false,
            };
        default:
            return state;
    }
}