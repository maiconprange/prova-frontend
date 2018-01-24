import angular from 'angular';
import 'angular-resource';
import 'angular-ui-router';
import 'angular-sanitize';
import 'angular-animate';
import 'angular-messages';
import 'angular-cookies';
import 'angular-i18n/angular-locale_pt-br';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import $ from 'jquery/dist/jquery.min';
window.$ = $;

import moment from 'moment/moment.js';
window.moment = moment;

//UI Bootstrap
import 'angular-ui-bootstrap';
import 'angular-ui-bootstrap/src/alert';

//angular-loading-bar
import 'angular-loading-bar/build/loading-bar.min.css';
import 'angular-loading-bar';

//Toastr
import 'angular-toastr';
import 'angular-toastr/dist/angular-toastr.min.css';

//Routes
import Routes from './core/routes/routes';

// Services
import Services from './core/services/services';
import ServicesUrl from './core/services/servicesUrl';

//Login imports
import HomeController from './components/home/controllers/home.controller';
import HomeServices from './components/home/services/home.services';

export default angular.module('hiplatform', [
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngMessages',
    'ngAnimate',
    'ngCookies',
    'ui.bootstrap',
    'angular-loading-bar',
    'toastr',
	])

	//Home
	.controller('HomeController', HomeController)
	.service('HomeServices', HomeServices)

	.service('Services', Services)
	.service('ServicesUrl', ServicesUrl)

	.config(Routes);
