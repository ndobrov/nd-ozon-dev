const getData = (str) => {
    return fetch(`https://ozon-test-22248-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)
    .then(res => res.json());    
}

export default getData;