import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= name %>Component from './<%= name %>.component';
import <%= name %>Service from './<%= name %>.service';

let <%= name %>Module = angular.module('<%= name %>', [
  uiRouter
])

.component('<%= name %>', <%= name %>Component, <%= name %>Service)

.name;

export default <%= name %>Module;
