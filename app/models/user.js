import Ember from 'ember';
import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany
} = DS;

const {
  computed,
  get
} = Ember;

export default Model.extend({
  posts: hasMany('post', { inverse: 'author' }),

  firstName: attr('string'),
  lastName: attr('string'),

  fullName: computed('firstName', 'lastName', function() {
    return [get(this, 'firstName'), get(this, 'lastName')].join(' ');
  })
});
