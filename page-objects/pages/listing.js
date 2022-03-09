import { Selector, t } from 'testcafe';


class ListingPage {

    constructor(){
        this.nextPageButton         = Selector("button[class*='next-next']")
        this.productCard            = Selector("a[href*='item']") // lista de todos los productos
        this.loadingImg             = Selector("div[class='load-container load']") //simbolo de carga cuando cambiamos de pagina
    }


    async clickOnProduct(whichOne){
        whichOne--
        await t
            .click(this.productCard.nth(whichOne))
    }

    async clickNextPage(){
        await t.scroll(0, 6000) // scrolleo al final de la pagina porque sino no detectaba el selector de paginado
        await t
            .click(this.nextPageButton)
            .expect(this.loadingImg.exists).notOk() // esperamos a que termine de cargar la pagina
    }




}

export default new ListingPage()