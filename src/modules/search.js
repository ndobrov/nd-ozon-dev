import getData from "./getData";
import renderGoods from "./renderGoods";
import { saerchFilter } from "./filter";

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input');

    searchInput.addEventListener('input', (event) => {
        const value = event.target.value;

        getData(value).then((data) => {
            renderGoods(saerchFilter(data, value));
        });
    })
    
}

export default search;