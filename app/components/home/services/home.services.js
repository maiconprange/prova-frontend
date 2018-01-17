export default /*@ngInject*/ class LoginServices {
    constructor($http, ServicesUrl, $q, Services) {
        this._$http = $http;
        this._ServicesUrl = ServicesUrl;
        this._$q = $q;
        this._Services = Services;
    }

    getLogin(params) {
        return this._Services.makePost(this._ServicesUrl.loginUrl(), params);
    }
}
