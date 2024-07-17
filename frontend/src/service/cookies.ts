import Cookies, { CookieSetOptions } from 'universal-cookie';

const cookies = new Cookies()


class cookieServices {

    get(name: string) {
        return cookies.get(name)
    }
    set(name: string, value: string, option : CookieSetOptions | undefined) {
        return cookies.set(name, value, option)
    }
    remove(name: string) {
        return cookies.remove(name)
    }
}

export default new cookieServices()