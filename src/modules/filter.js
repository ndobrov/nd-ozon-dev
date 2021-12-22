export const saerchFilter = (goods, value) => {
    return goods.filter(goodsItem => goodsItem.title.toLowerCase().includes(value.toLowerCase()));
}

export const categoryFilter = (goods, value) => {
    return goods.filter(goodsItem => goodsItem.category === value);
}

export const priceFilter = (goods, min, max) => {
    return goods.filter(goodsItem => {
        if (min === '' && max === '') {
            return goods;
        } else if (min !== '' && max !== '') {
            return goodsItem.price > +min && goodsItem.price < +max; 
        } else if (min !== '' && max === '') {
            return goodsItem.price > +min;
        } else if (min === '' && max !== '') {
            return goodsItem.price < +max;
        }
    });
}

export const hotSaleFilter = (goods, value) => {
    return goods?.filter(goodsItem => {
        if (value) {
            return goodsItem.sale === true;
        } else {
            return goodsItem;
        }
    });
}
