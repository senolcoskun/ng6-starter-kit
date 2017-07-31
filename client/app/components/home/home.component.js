import template from './home.html';
import controller from './home.controller';
import './home.scss';
import $ from 'jquery';
import 'devextreme/ui/button';
import dialog from 'devextreme/ui/dialog';

let homeComponent = {
  bindings: {},
  template,
  controller
};

export default homeComponent;
