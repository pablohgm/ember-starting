App = Ember.Application.create();

App.Router.map(function() {
    this.route("home", { path: "/" });
    this.resource('test', function(){
        this.route('summary')
    });
    this.resource('user', { path: '/user/:user_id' });
});

App.HomeRoute = Ember.Route.extend({
    model: function() {
        return ['Whats new', 'Journal', 'Research'];
    },
    setupController: function(controller, model){
        controller.set('info', model)
        controller.set('users', App.User.find());
    }
});

/** STORES */

//DS.RESTAdapter.reopen({
//    url: 'http://localhost:8000/main'
////    url:'/ws/ember'
//});

App.Store = DS.Store.extend({
    revision: 13,
//    url:"http://localhost:8000/main"
    adapter: 'DS.FixtureAdapter'
});

/** MODELS */

App.User = DS.Model.extend({
    name: DS.attr('string'),
    email: DS.attr('string')
})

/**FIXTURES*/

App.User.FIXTURES = [{
    id: 1,
    name: "a",
    email: "jclare@alivebox.com"
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