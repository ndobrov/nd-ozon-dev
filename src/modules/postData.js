const postData = (cart) => {
    return fetch('https://ozon-test-22248-default-rtdb.firebaseio.com/goods.json', {
        method: 'POST',
        body:  JSON.stringify(cart),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(res => res.json())    
}

export default postData;