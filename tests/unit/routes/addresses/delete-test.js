import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | addresses/delete', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:addresses/delete');
    assert.ok(route);
  });
});
