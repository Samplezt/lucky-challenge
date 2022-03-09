import {t, Selector, RequestLogger} from 'testcafe';
import dataQa from '../utils/test-data.json'
import HomePage from '../page-objects/pages/home'
import ListingPage from '../page-objects/pages/listing'
import Product from '../page-objects/pages/product'

fixture `Busqueda de productos`
     .page `${dataQa.mainUrl}`
     .beforeEach(async t => {
          await t.maximizeWindow() 
          await t.expect(HomePage.mainLogo.visible).ok() // verificamos la carga de la pagina
      })
     
test("El segundo item debe tener stock para la compra", async t =>{
    await HomePage.managePopup()
    await HomePage.search('iphone')
    await ListingPage.clickNextPage()
    await ListingPage.clickOnProduct(2)
    await t.expect(Product.stockAvailable.exists).ok() // esperamos a que sea accesible el elemento que tiene el stock disponible
    let currentStock = await (Product.stockAvailable).textContent
    currentStock = currentStock.split(" ")
    currentStock = parseInt(currentStock[0])
    await t.expect(currentStock).gte(1) // verificamos que haya stock disponible para la compra
})