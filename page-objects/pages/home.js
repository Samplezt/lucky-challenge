import { Selector, t } from 'testcafe';


class HomePage {

    constructor(){
        this.mainLogo           = Selector('div.site-logo')
        this.searchBox          = Selector('input#search-key')
        this.searchButton       = Selector('input.search-button')
        this.popup              = Selector('div.poplayer-content')
    }

    async search(product){
        await t
            .click(this.searchBox)
            .typeText(this.searchBox, product)
        await t
            .click(this.searchButton)
        
    }

    async managePopup(){
        if (await this.popup.visible){
            await t.click('img.btn-close')
        }

    }




}

export default new HomePage()