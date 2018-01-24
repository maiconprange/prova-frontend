//Utils css
import '../../css/utils.scss';

//Login
import homeTemplate from '../../components/home/views/home.view.html';
import '../../components/home/scss/home.scss';

export default /*@ngInject*/ function ($stateProvider, $urlRouterProvider, cfpLoadingBarProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            views: {
                'content': {
                    templateUrl: homeTemplate,
                    controller: 'HomeController',
                    controllerAs: 'vm'
                }
            }
        });

    cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.includeSpinner = true;
}
