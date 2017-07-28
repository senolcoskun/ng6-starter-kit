import template from './<%= name %>.html';
import controller from './<%= name %>.controller';
import service from './<%= name %>.service';
import './<%= name %>.scss';

let <%= name %>Component = {
  bindings: {},
  template,
  controller,
  service
};

export default <%= name %>Component;
