import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter } from "./filter"

const price = () => {
    const minPrice = document.querySelector('#min');
    const maxPrice = document.querySelector('#max');

    console.log(minPrice, maxPrice);
    let minValue = 0;
    let maxValue = 40000;

    minPrice.addEventListener('input', (event) => {
        let value = +event.target.value;
        value ? minValue = value : minValue;
        
        getData(minValue).then(data => {
            renderGoods(priceFilter({data, minValue, maxValue}));
        });
    })

    maxPrice.addEventListener('input', (event) => {
        let value = +event.target.value;
        value ? maxValue = value : maxValue;
        
        getData(maxValue).then((data) => {
            renderGoods(priceFilter({data, minValue, maxValue}));
        });
    })
}

export default price;