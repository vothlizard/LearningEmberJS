import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('addresses', function() {
    this.route('new');

    this.route('edit', {
      path: ':address_id/edit'
    });

    this.route('delete', {
      path: ':address_id/delete'
    });
  });
});

export default Router;
