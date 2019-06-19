import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    title: DS.attr(),
    episode_id: DS.attr(),
    opening_crawl: DS.attr(),
    director: DS.attr(),
    producer: DS.attr(),
    release_date: DS.attr()
});

