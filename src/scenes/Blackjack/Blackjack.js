import React, { Component } from 'react';
import _ from 'lodash';
import Card from '../../components/Card';
import fetchPosition from '../../core/fetchPosition';
import fetchCard from '../../core/fetchCard';
import getHandTotal from '../../core/getHandTotal';

/** The initial Blackjack scene */
class Blackjack extends Component {
    state = {
    	playerTtl: 0,
    	dealerTtl: 0,
    }

    componentDidMount() {
    	this.fetchPlayersHand();
    }

    componentDidUpdate(prevProps) {
    	if(prevProps.playerHand.length === 0 && this.props.playerHand.length === 0) {
    		return this.fetchPlayersHand();
    	}

    	if(!prevProps.playerStick && this.props.playerStick) {
    		console.log('Player has sticked, dealer\'s turn');
    	}

    	if(prevProps.playerHand !== this.props.playerHand) {
    		const playerTtl = getHandTotal(this.props.playerHand);
            console.log(this.props.playerHand, playerTtl)
    		if(playerTtl.length === 0) {
    			return this.props.declareResult('Player loses')
    		}
    		this.setState({ playerTtl });
    	}
    	if(prevProps.dealerHand !== this.props.dealerHand) {
    		const dealerTtl = getHandTotal(this.props.dealerHand);
    		if(dealerTtl.length === 0) {
    			return this.props.declareResult('Dealer loses')
    		}
    		this.setState({ dealerTtl });
    	}
    }

    fetchPlayersHand() {
    	fetchCard(this.props.deck, fetchPosition(this.props.deck.length-1, 0, { count: 4 }))
    	.then(resp => {
    		this.props.setPlayerHand([resp[0], resp[1]]);
    		this.props.setDealerHand([resp[2], resp[3]]);
    	}, e => {
    		console.log(e)
    	});
    }

    handleHitClick = (e, a) => {
    	fetchCard(this.props.deck, fetchPosition(this.props.deck.length-1, 0))
    	.then(resp => {
    		this.props.setPlayerHand(resp);
    	}, e => {
    		console.log(e)
    	})
    }

    render() {
    	console.log(this.props.history)
    	return <div>
    		<Card.Group dealer={true}>
    			{this.props.dealerHand.map(card => <Card key={`card-${card.name}`} name={card.name} />)}
    		</Card.Group>
    		<Card.Group>
    			{this.props.playerHand.map(card => <Card key={`card-${card.name}`} name={card.name} />)}
    		</Card.Group>
    		<button onClick={this.handleHitClick}>Hit</button>
    		<button onClick={this.props.setPlayerStick}>Stick</button>
    		<button onClick={this.props.resetGame}>Reset</button>
    	</div>;
    }
}

export default Blackjack;