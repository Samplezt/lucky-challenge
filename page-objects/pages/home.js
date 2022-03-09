import { Selector, t } from 'testcafe';


class HomePage {

    constructor(){
        this.mainLogo           = Selector('div.site-logo')
        this.searchBox          = Selector('input#search-key')
        this.searchButton       = Selector('input.search-button')
    }

    async search(product){
        await t
            .click(this.searchBox)
            .typeText(this.searchBox, product)
        await t
            .click(this.searchButton)
        
    }




}

export default new HomePage()