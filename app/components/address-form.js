import Component from '@ember/component';

export default Component.extend({
    model() {
        return this.get('store').createRecord('address');
      },
    
      actions: {
        save(record) {
          record.save()
            .then(() => this.transitionTo('addresses'));
        },
    
        willTransition() {
          this._super(...arguments);
          const record = this.controller.get('model');
          record.rollbackAttributes();
        }
      }
});
