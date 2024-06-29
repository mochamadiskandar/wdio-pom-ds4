import { $ } from '@wdio/globals'
import Page from './page.js'

class CartPage extends Page {
    open(path) {
        return super.open('cart.html')
    }

    get cartBadge() {
        return $("//span[@class='shopping_cart_badge']")
    }

    async validateBadgeCartUpdate() {
        const currentCount = await this.cartBadge.getText()
        console.log(
            '🚀 ~ validateBadgeCartUpdate ~ currentCount:',
            await currentCount,
        )
        await expect(currentCount).not.toBe(0)
        await expect(currentCount).not.toBe(null)
    }
}

export default new CartPage()
