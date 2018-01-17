export default /*@ngInject*/ class Services {
    constructor($cookies, $base64, $q, $http) {
        this._$cookies = $cookies;
        this._$base64 = $base64;
        this._$q = $q;
        this._$http = $http;
    }

    decodeJWT(token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }

    setCookieToken(token) {
        const expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        this._$cookies.put('logado', true, {'expires': expireDate});
        this._$cookies.put('token', token, {'expires': expireDate});
    }

    getCookieToken() {
        const cookieToken = this._$cookies.get('token');
        if (cookieToken) {
            return {
                cookieToken
            };
        }
    }

    setCookieUser(object) {
        const expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        this._$cookies.put('user', JSON.stringify(object.data), {'expires': expireDate});
    }

    getCookieUser() {
        const cookieUser = this._$cookies.get('user');
        if (cookieUser) {
            return JSON.parse(cookieUser);
        }
    }

    getUserValid() {
        if (!this._$cookies.get('logado') || !this._$cookies.get('token')) {
            return false;
        }
        return true;
    }

    makePost(url, params) {
        return this._$q((resolve, reject) => {
            const promise = this._$http.post(url, params).then((payload = {}) => {
                resolve(payload);
            }).catch((payload) => {
                reject(payload);
            });
            return promise;
        });
    }

    makeGet(url, params) {
        return this._$q((resolve, reject) => {
            const promise = this._$http.get(url, params).then((payload = {}) => {
                resolve(payload);
            }).catch((payload) => {
                reject(payload);
            });
            return promise;
        });
    }

    makePut(url, params) {
        return this._$q((resolve, reject) => {
            const promise = this._$http.put(url, params).then((payload = {}) => {
                resolve(payload);
            }).catch((payload) => {
                reject(payload);
            });
            return promise;
        });
    }

    makeDelete(url) {
        return this._$q((resolve, reject) => {
            const promise = this._$http.delete(url).then((payload = {}) => {
                resolve(payload);
            }).catch((payload) => {
                reject(payload);
            });
            return promise;
        });
    }
}

