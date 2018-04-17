import _ from 'lodash';

const probabilitySuccessful = (deck = [], target = -1) => {
    return new Promise((res, rej) => {
        if(Number.isNaN(target * 1) || target === -1 || target > 21) return rej({msg: 'A valid target value was not supplied', data: target});
        if(!_.isArray(deck) || _.isEmpty(deck)) return rej({msg: 'A valid deck was not supplied', data: deck});
        if(target === 0) return res(0);

        const valid = deck.filter(card => {
            if(_.isArray(card.value))
                return (card.value.filter(value => value <= target).length > 0);
            return (card.value <= target);
        })

        if(valid.length === 0) return res(0);
        return res(Math.ceil((valid.length / deck.length) * 100));
    })
}

export default probabilitySuccessful;