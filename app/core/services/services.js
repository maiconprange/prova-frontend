export default /*@ngInject*/ class Services {
    constructor($q, $http) {
        this._$q = $q;
        this._$http = $http;
    }

    makeGet(url, params) {
        return this._$q((resolve, reject) => {
            const promise = this._$http.get(url, params).then((payload = {}) => {
                resolve(payload.data);
            }).catch((payload) => {
                reject(payload);
            });
            return promise;
        });
    }
}

