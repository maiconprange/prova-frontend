export default /*@ngInject*/ class SessionInjector {
    constructor($cookies) {
        this._$cookies = $cookies;
        return {
            request: this.request.bind(this)
        };
    }

    request(config) {
        const url = config.url.split('/');
        if (url[2] !== 'cep.republicavirtual.com.br') {
            const token = this._$cookies.get('token') || null;
            config.headers['Content-Type'] = 'application/json';
            config.headers['Accept'] = 'application/json';
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    }
}
