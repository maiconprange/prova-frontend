export default /*@ngInject*/ class FrontLoginController {
    constructor($scope, $state, FrontLoginServices, Services, toastr) {
        this._$scope = $scope;
        this._$state = $state;
        this._FrontLoginServices = FrontLoginServices;
        this._Services = Services;
        this._toastr = toastr;
        this.init();
    }

    init() {
    }

    login(isValid) {
        if (!isValid) {
            return;
        }
        const params = {
            LOGUSU: this.formLogin.logusu,
            SENUSU: this.formLogin.senusu
        };
        this._FrontLoginServices.getLogin(params).then((payload) => {
            if (payload.data.LOGIN) {
                this._Services.setCookieToken(payload.data.ACCESS_TOKEN);
                this._Services.setCookieUser(this._Services.decodeJWT(payload.data.ACCESS_TOKEN));
                this._toastr.success('Realizado com sucesso!', 'Login');
                this._$state.go('front-dashboard');
            }else {
                this._toastr.error('Erro ao realizar login!', 'Login');
            }
        }).catch(() => {
            this._toastr.error('Erro ao realizar login!', 'Login');
        });
    }

}
