import _ from 'lodash';

//This function accepts a number, a promise that resolves to a number or a promise that resolves to an array of numbers as the second parameter
const fetchCard = async (deck = [], idx = -1) => {
    let idxRes
    switch(typeof idx) {
        case 'object':
            idxRes = await idx;
        break;
        case 'function':
            idxRes = await idx();
        break;
        default:
            idxRes = idx;
        break;
    }

    if(idxRes === -1) throw Error({msg: 'An invalid index was supplied', data: idxRes});
    if(Number.isNaN(idxRes) && !_.isArray(idxRes)) throw Error({msg: 'An invalid index was supplied', data: idxRes});
    if(_.isEmpty(deck)) throw Error({msg: 'No deck was provided', data: deck});
    
    const search = (!_.isArray(idxRes)) ? [ idxRes ] : idxRes;

    if(search.filter(idx => idx > deck.length).length > 0) throw Error({msg: 'The index was outside the range of the array', data: idxRes});

    const hand = deck.filter((card, idx) => 
        search.indexOf(idx) > -1
    );
    
    return hand;
}

export default fetchCard;