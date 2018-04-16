const fetchPosition = (max = 51, min = 0) => {
    return new Promise((res, rej) => {
        if(Number.isNaN(max*1)) return rej({msg: 'Max is not a number', data: max});
        if(Number.isNaN(min*1)) return rej({msg: 'Min is not a number', data: min});
        if(max <= min) return rej({msg: 'Max must be greater than min', data: {max, min}});
        const result = Math.floor((max + 1) * Math.random());
        if(result > min && result <= max) return res(result);
        return rej({msg: 'Unexpected result generating random number', data: {max, min, result}});
    })
}

export default fetchPosition;