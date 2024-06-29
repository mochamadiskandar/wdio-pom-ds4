import { $ } from '@wdio/globals'
import Page from './page.js'

class LoginPage extends Page {
    open(path) {
        return super.open('')
    }

    get inputUsername() {
        return $("//input[@id='user-name']")
    }

    get inputPassword() {
        return $("//input[@name='password']")
    }

    get loginButton() {
        return $("//input[@class='submit-button btn_action']")
    }

    async login(username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await console.log(
            '🚀 ~ LoginPage ~ login ~ loginButton:',
            (await this.loginButton).getValue(),
        )
        await this.loginButton.click()
    }
}

export default new LoginPage()
