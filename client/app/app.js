import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import $ from 'jquery';

angular.module('app', [
    uiRouter,
    Common,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
