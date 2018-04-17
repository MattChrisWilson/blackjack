import { connect } from 'react-redux'
import { 
    setPlayerHand,
    setDealerHand,
    declareResult,
} from '../../actions'
import Blackjack from '../../scenes/Blackjack'

const mapStateToProps = (state, props) => {
    return {
		deck: state.deck,
        playerHand: state.playerHand,
        dealerHand: state.dealerHand,
        history: state.history,
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPlayerHand: (data) => {dispatch(setPlayerHand(data))},
        setDealerHand: (data) => {dispatch(setDealerHand(data))},
        declareResult: (data) => {dispatch(declareResult(data))},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blackjack)