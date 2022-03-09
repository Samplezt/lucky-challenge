import { Selector, t } from 'testcafe';


class Product {

    constructor(){
        this.stockAvailable         = Selector('div.product-quantity-tip')
    }
    
}

export default new Product()