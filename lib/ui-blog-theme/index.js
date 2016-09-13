/*jshint node:true*/

var Theme = require('untitled-ui/theme');

module.exports = Theme.extend({
  name: 'ui-blog-theme',
  prefix: 'blog',

  isInRepoTheme: function() {
    return true;
  }
});
