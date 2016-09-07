import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return faker.hacker.phrase();
  },

  body() {
    return [1, 2, 3, 4, 5].map(() => {
      return `<p>${faker.lorem.paragraph()}</p>`;
    }).join('\n');
  },

  publishedAt() {
    return faker.date.recent().toISOString();
  },

  summary() {
    return faker.lorem.sentence();
  }
});
