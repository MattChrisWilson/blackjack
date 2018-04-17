const generateNumber = (pool) => {
    const value = Math.floor((pool.length + 1) * Math.random());
    return pool.splice(pool.indexOf(value), 1)[0];
}

// Fetches a number from the deck or multiple if opts.count is passed
const fetchPosition = (max = 51, min = 0, opts = {}) => {
    return new Promise((res, rej) => {
        if(Number.isNaN(max*1)) return rej({msg: 'Max is not a number', data: max});
        if(Number.isNaN(min*1)) return rej({msg: 'Min is not a number', data: min});
        if(max <= min) return rej({msg: 'Max must be greater than min', data: {max, min}});
        
        let source = []
        for(let i = 0; i < max-min; i++) {
            source.push(min+i)
        }

        let num = [1]
        if (opts.count && !Number.isNaN(opts.count)) {
            let n = [];
            for(let i = 0; i < (opts.count); i++) {
                n.push(1);
            }
            num = n;
        }

        const result = num.reduce(positions => {
            let result =generateNumber(source);

            if(result < min || result > max) return rej({msg: 'Unexpected result generating random number', data: {max, min, result}});

            return [ ...positions, result ];
        }, []);

        if(result.length !== num.length) return rej({msg: 'Too few values returned', data: `Expected ${num.length}, received ${result.length}`});

        return (result.length === 1) ? res(result[0]) : res(result);
    })
}

export default fetchPosition;