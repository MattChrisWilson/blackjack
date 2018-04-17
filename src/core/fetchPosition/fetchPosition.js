// Calls recursively if necessary to select a unique value
const generateNumber = (max, selected = [], attempt = 1) => {
    if(attempt === 5) throw Error({msg: 'A max five attempts occurred', data: { max, selected }})
    if(selected.length >= max) throw Error({msg: 'More values selected than available', data: { max, selected }});
    
    const value = Math.floor(max * Math.random());
    if(selected.indexOf(value) === -1){
     // console.log('past index', value)
     return value;
    }

    //Will lose scope if this gets called
    generateNumber(max, selected, attempt++);
}

// Fetches a number from the deck or multiple if opts.count is passed
const fetchPosition = (max = 51, min = 0, opts = {}) => {
    return new Promise((res, rej) => {
        if(Number.isNaN(max*1)) return rej({msg: 'Max is not a number', data: max});
        if(Number.isNaN(min*1)) return rej({msg: 'Min is not a number', data: min});
        if(max <= min) return rej({msg: 'Max must be greater than min', data: {max, min}});
        
        let num = [1]
        if (opts.count && !Number.isNaN(opts.count)) {
            let n = [];
            for(let i = 0; i < (opts.count); i++) {
                n.push(1);
            }
            num = n;
        }

        const result = num.reduce(positions => {
            let result = -1;
            
            try{
                result = generateNumber(max + 1, positions, 1);
            } catch (e) {
                return rej(e);
            }

            if(result < min || result > max) return rej({msg: 'Unexpected result generating random number', data: {max, min, result}});

            return [ ...positions, result ];
        }, []);

        if(result.length !== num.length) return rej({msg: 'Too few values returned', data: `Expected ${num.length}, received ${result.length}`});

        return (result.length === 1) ? res(result[0]) : res(result);
    })
}

export default fetchPosition;