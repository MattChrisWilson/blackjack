const getTotal = (hand) => {
    return hand.reduce((ttl, entry) => {
        const value = (Number.isNaN(entry.value)) ? entry.value : [ (entry.value*1) ];
        
        return ttl.map(curTtl => 
           value.map(val => curTtl + val)
        )
        .reduce((prev, curr) => prev.concat(curr), [])
        .filter((val, idx, arr) => arr.indexOf(val) === idx && val < 22)
    }, [0])
};

export default getTotal;