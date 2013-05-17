App = Ember.Application.create();

App.Router.map(function() {
    this.route("home", { path: "/" });
    this.resource('team', { path: '/team/:team_id' });
});

App.HomeRoute = Ember.Route.extend({
    model: function() {
        return ['Whats new', 'Journal', 'Research'];
    },
    setupController: function(controller, model){
        controller.set('info', model)
        controller.set('teams', App.Team.find());
    }
});

/** STORES */

App.Store = DS.Store.extend({
    revision: 12,
    adapter: 'DS.FixtureAdapter'
});

/** MODELS */

App.Team = DS.Model.extend({
    name: DS.attr('string'),
    colors: DS.attr('string')
})

/**FIXTURES*/

App.Team.FIXTURES = [{
    id: 1,
    name: 'Celtics',
    colors: 'Green, White'
}, {
    id: 2,
    name: 'Lakers',
    colors: 'Yellow, Black'
}, {
    id: 3,
    name: 'Bulls',
    colors: 'Red, Black'
}, {
    id: 4,
    name: 'Mavericks',
    colors: 'Blue, White'
}, {
    id: 5,
    name: 'Spurs',
    colors: 'Black, Grey, White'
}];