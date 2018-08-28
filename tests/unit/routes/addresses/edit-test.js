import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | addresses/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:addresses/edit');
    assert.ok(route);
  });
});
