import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model({ postId }) {
    return this.store.findRecord('post', postId);
  }
});
