App = Ember.Application.create();

App.Router.map(function() {
    this.route("home", { path: "/" });
    this.resource('test', function(){
        this.route('summary')
    });
    this.resource('movie', { path: '/movie/:movie_id' });
});

App.HomeRoute = Ember.Route.extend({
    model: function() {
        return App.Movie.all();
    },
    setupController: function(controller, model){
        controller.set('info', model)
        controller.set('movies', model);
        this.loadDataTable(controller,model);

    },
    loadDataTable:function(controller, model){
        debugger;
            $('#dynamic').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="example"></table>' );
            $('#example').dataTable( {
                "aaData": model,
                "aoColumns": [
                    { "sTitle": "Engine" },
                    { "sTitle": "Browser" },
                    { "sTitle": "Platform" },
                    { "sTitle": "Version", "sClass": "center" },
                    {
                        "sTitle": "Grade",
                        "sClass": "center"
                    }
                ]
            } );
            $('td.center').editable('', {
                type : 'select',
                data:['Select an option','A','B','C']
            });
    }
});

App.Movie = Ember.Object.extend();

App.Movie.reopenClass({

    loadLinks: function() {
        var that = this;
        return Ember.Deferred.promise(function (p) {
            p.resolve($.ajax({
                    type: "GET",
                    dataType: "jsonp",
                    url: "http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/top_rentals.json?limit=10&country=ca&apikey=jv7ktqjfbzj9rxe2gkx5fvk5"
                }).then(that.onLoadLinksResult));
        });
    },

    onLoadLinksResult: function(response) {
        var movies = [];
        response.movies.forEach( function (movie) {
            movies.push( App.Movie.create(movie) );
        });
        return movies;
    },

    all: function() {
        return this.loadLinks().then(function(movies){
            return movies;
        });
    }

});