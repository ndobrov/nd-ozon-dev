const postData = () => {
    return fetch('https://ozon-test-22248-default-rtdb.firebaseio.com/goods.json', {
        method: 'POST',
        body:  JSON.stringify({
            title: "Ведьмак 3",
            price: 3000,
            sale: true,
            img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
            category: "Игры и софт"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(res => res.json())    
    // .then((data) => {
    //     console.log(data);
    // })
}

export default postData;