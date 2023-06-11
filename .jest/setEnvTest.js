process.env.NEXT_PUBLIC_SPACE_ID = '34938dldfjJKLSJSL74984387'
var localStorageMock = (function () {
    var store = {}
    return {
        getItem: function (key) {
            return store[key]
        },
        setItem: function (key, value) {
            store[key] = value.toString()
        },
        clear: function () {
            store = {}
        },
        removeItem: function (key) {
            delete store[key]
        },
    }
})()
Object.defineProperty(window, 'localStorage', { value: localStorageMock })
var sessionStorageMock = (function () {
    var store = {}
    return {
        getItem: function (key) {
            return store[key]
        },
        setItem: function (key, value) {
            store[key] = value.toString()
        },
        clear: function () {
            store = {}
        },
        removeItem: function (key) {
            delete store[key]
        },
    }
})()
Object.defineProperty(window, 'sessionStorage', { value: sessionStorageMock })
