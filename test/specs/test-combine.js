import loginPage from '../pageobjects/login.page.js'
import productsPage from '../pageobjects/products.page.js'
import cartPage from '../pageobjects/cart.page.js'

describe('Test - Sauce Demo Login Page', () => {
    it('TC1 - Login Success', async () => {
        await loginPage.open()

        await loginPage.login(
            process.env.SAUCEDEMO_USERNAME,
            process.env.SAUCEDEMO_PASSWORD,
        )
        await productsPage.validateOnPage()
    })

    it('TC2 - Add Item to Cart', async () => {
        await productsPage.open()
        await productsPage.addProductToCart()
        await cartPage.validateBadgeCartUpdate()
        await browser.debug()
    })
})
