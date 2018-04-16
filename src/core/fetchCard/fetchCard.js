import _ from 'lodash';

const fetchCard = (deck = [], idx = -1) => {
    return new Promise((res, rej) => {
        if(idx === -1) return rej({msg: 'No index was supplied', data: idx});
        if(_.isEmpty(deck)) return rej({msg: 'No deck was provided', data: deck});
        let selected = deck.splice(idx, 1);
        deck.reduce((newDeck, entry, i) => {
            if(i === idx) return newDeck;
            return [ ...newDeck, entry ];
        }, [])
        return res(deck);
    })
}

export default fetchCard;