import { browser } from '@wdio/globals'

export default class Page {
    open(path) {
        const baseUrl = process.env.BASE_URL
        return browser.url(`${baseUrl}/${path}`)
    }
}
