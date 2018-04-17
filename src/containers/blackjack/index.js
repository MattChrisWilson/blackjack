import { connect } from 'react-redux'
import { 
    setPlayerHand,
    setDealerHand,
    setPlayerStick,
    declareResult,
    resetGame,
} from '../../actions'
import Blackjack from '../../scenes/Blackjack'

const mapStateToProps = (state, props) => {
    return {
		deck: state.deck,
        playerHand: state.playerHand,
        dealerHand: state.dealerHand,
        playerStick: state.playerStick,
        history: state.history,
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPlayerHand: (data) => dispatch(setPlayerHand(data)),
        setDealerHand: (data) => dispatch(setDealerHand(data)),
        setPlayerStick: () => dispatch(setPlayerStick()),
        declareResult: (data) => dispatch(declareResult(data)),
        resetGame: () => dispatch(resetGame()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blackjack)