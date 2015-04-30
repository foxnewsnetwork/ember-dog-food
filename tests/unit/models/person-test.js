import {
  moduleForModel,
  test
} from 'ember-qunit';

import DS from 'ember-data';
import Ember from 'ember';

moduleForModel('person', 'Person Model', {
  // Specify the other units that are required for this test.
  needs: []
});

test("it should exist", function (assert) { 
  var person = this.subject();
  assert.ok(person, "the basic person should be there");
});

test("employmentStatus", function (assert) {
  var person = this.subject({
    name: "Jamal Brown",
    race: "100 yard dash",
    education: "bachelors of social justice"
  });
  assert.equal(person.get("employmentStatus"), "Jamal Brown 100 yard dash bachelors of social justice");
});