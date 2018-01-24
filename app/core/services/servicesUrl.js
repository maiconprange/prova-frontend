import BaseUrl from './base-url';

function getAbsoluteUrl(route) {
    return BaseUrl + route;
}

export default class ServicesUrl {

    getAlbunsUrl() {
        return getAbsoluteUrl(`lookup`);
    }
}
