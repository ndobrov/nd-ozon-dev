export const saerchFilter = (goods, value) => {
    return goods.filter(goodsItem => goodsItem.title.toLowerCase().includes(value.toLowerCase()));
}

export const categoryFilter = (goods, value) => {
    return goods.filter(goodsItem => goodsItem.category === value);
}

export const priceFilter = ({data, minValue, maxValue}) => {
    return data.filter(goodsItem => {
        return goodsItem.price >= minValue && goodsItem.price <= maxValue;
    });
}
