import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        confirm(record) {
          record.destroyRecord()
            .then(() => this.transitionTo('addresses'));
        }
      }
});
