App = Ember.Application.create();

App.Router.map(function() {
    this.route("home", { path: "/" });
    this.resource('test', function(){
        this.route('summary')
    });
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
    url:"http://localhost:8000/main/user/"
    //adapter: 'DS.FixtureAdapter'
});

/** MODELS */

App.Team = DS.Model.extend({
    name: DS.attr('string'),
    email: DS.attr('string')
})

/**FIXTURES*/

App.Team.FIXTURES = [{
    pk: 4,
    name: "a",
    email: "jclare@alivebox.com",
    entity_status: 0,
    id: 4,
    password: "ffd534f67f52647378dc626d28c25746",
    default_group: 32767,
    session_key: "1"
//}, {
//    id: 2,
//    name: 'Lakers',
//    email: 'Yellow, Black'
//}, {
//    id: 3,
//    name: 'Bulls',
//    email: 'Red, Black'
//}, {
//    id: 4,
//    name: 'Mavericks',
//    email: 'Blue, White'
//}, {
//    id: 5,
//    name: 'Spurs',
//    email: 'Black, Grey, White'
//
 }];