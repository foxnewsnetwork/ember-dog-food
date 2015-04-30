import Ember from 'ember';
import DS from 'ember-data';

var Person;

Person = DS.Model.extend({
  name: DS.attr("string"),
  race: DS.attr("string"),
  education: DS.attr("string"),
  employmentStatus: Ember.computed("name", "race", "education", function() {
    return [this.get("name"), this.get("race"), this.get("education")].join(" ");
  })
});

export default Person;