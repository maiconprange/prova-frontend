export default /*@ngInject*/ class HomeServices {
    constructor($http, ServicesUrl, $q, Services) {
        this._$http = $http;
        this._ServicesUrl = ServicesUrl;
        this._$q = $q;
        this._Services = Services;
    }

    getAlbuns(params) {
        return this._Services.makeGet(this._ServicesUrl.getAlbunsUrl(), params);
    }

    getMusics(params) {
        return this._Services.makeGet(this._ServicesUrl.getAlbunsUrl(), params);
    }
}
