exports.seed = function(knex, Promise) {
  return knex('eventTypes')
    .del()
    .then(function() {
      return knex('eventTypes').insert([
        { name: 'meeting' },
        { name: 'reminder' },
        { name: 'birthday' },
      ]);
    });
};
