import React, { Component } from 'react';
import Card from '../../components/Card';
import fetchPosition from '../../core/fetchPosition';
import fetchCard from '../../core/fetchCard';
import getHandTotal from '../../core/getHandTotal';
import probabilitySuccessful from '../../core/probabilitySuccessful';

/** The initial Blackjack scene */
class Blackjack extends Component {
    state = {
    	playerTtl: [0],
    	dealerTtl: [0],
    }

    componentDidMount() {
    	this.fetchPlayersHand();
    }

    componentDidUpdate(prevProps) {
    	// Game over
        if(!prevProps.gameOver && this.props.gameOver) return;

        // There is no player hand yet, so fetch it
        if(prevProps.playerHand.length === 0 && this.props.playerHand.length === 0) return this.fetchPlayersHand();

        // The player hand has changed, re-evaluate the ttl
    	if(prevProps.playerHand !== this.props.playerHand) {
    		const playerTtl = getHandTotal(this.props.playerHand);

    		if(playerTtl.length === 0) return this.props.declareResult('Dealer wins');
    		this.setState({ playerTtl });
    	}

        // The dealer hand has changed, re-evaluate the ttl
    	if(prevProps.dealerHand !== this.props.dealerHand) {
    		const dealerTtl = getHandTotal(this.props.dealerHand);

            if(dealerTtl.length === 0) return this.props.declareResult('Player wins');
            if(dealerTtl.indexOf(21) > -1) return this.props.declareResult('Dealer wins');
    		return this.setState({ dealerTtl });
    	}

        // The player has stuck, time for the dealer
        if(this.props.playerStick) return this.fetchDealersHand();
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

    fetchDealersHand() {
        const targetArr = this.state.dealerTtl.map(ttl => 21-ttl);

        Promise.all(targetArr.map(target => probabilitySuccessful(this.props.deck, target)))
        .then(resp => resp.reduce((max, target) => (target > max) ? target : max, 0))
        .then(percentage => {
            if(percentage >= this.props.difficulty) {
                fetchCard(this.props.deck, fetchPosition(this.props.deck.length-1, 0)).then(card => {
                    this.props.setDealerHand(card)
                });
            } else {
                return this.props.declareResult((this.state.playerTtl[0] > this.state.dealerTtl[0]) ? 'Player wins' : 'Dealer wins');
            }
        })
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
    	return <div>
    		<Card.Group hide={!this.props.gameOver} total={this.state.dealerTtl} >
    			{this.props.dealerHand.map(card => <Card key={`card-${card.name}`} name={card.name} />)}
    		</Card.Group>
    		<Card.Group total={this.state.dealerTtl} >
    			{this.props.playerHand.map(card => <Card key={`card-${card.name}`} name={card.name} />)}
    		</Card.Group>
    		<div className={"userUI"}>
                <button disabled={this.props.gameOver || this.props.playerStick} onClick={this.handleHitClick}>Hit</button>
        		<button disabled={this.props.gameOver || this.props.playerStick} onClick={this.props.setPlayerStick}>Stick</button>
            </div>
    		<button className={'doubleWidthBtn'} onClick={this.props.resetGame}>Reset</button>
            <div>
                <h2>History</h2>
                {this.props.history.map((entry, idx) => <div key={`history-${idx}`}>{entry}</div>)}
            </div>
    	</div>;
    }
}

export default Blackjack;