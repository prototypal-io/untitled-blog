import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  author: belongsTo('user', { inverse: 'posts' }),

  body: attr('string'),
  summary: attr('string'),
  title: attr('string'),
  publishedAt: attr('date')
});
