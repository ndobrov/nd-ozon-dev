import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter, hotSaleFilter } from "./filter"

const price = () => {
    const minPrice = document.querySelector('#min');
    const maxPrice = document.querySelector('#max');
    const checkboxInput = document.querySelector('#discount-checkbox');
    const checkboxSpan = document.querySelector('.filter-check_checkmark');

    minPrice.addEventListener('input', () => {        
        getData().then(data => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minPrice.value, maxPrice.value));
        });
    })

    maxPrice.addEventListener('input', () => {
        getData().then(data => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minPrice.value, maxPrice.value));
        });
    });

    checkboxInput.addEventListener('change', () => {
        if (checkboxInput.checked) {
            checkboxSpan.classList.add('checked');
        } else {
            checkboxSpan.classList.remove('checked');
        }
        getData().then(data => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minPrice.value, maxPrice.value));
        });
    })
}

export default price;