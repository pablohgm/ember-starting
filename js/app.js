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
        debugger;
    }
});

App.HomeController = Ember.ArrayController.extend({});

App.BasicView = Ember.View.extend({
    layout: Ember.Handlebars.compile('<table cellpadding="0" cellspacing="0" border="0" class="display" id="example"></table>'),
    didInsertElement: function() {
        Ember.run.scheduleOnce('afterRender', this, function(){
            //log
            console.log("INTO THE CALL-BACK ...");
            debugger;
            var aDataSet = [
                ['Trident','Internet Explorer 4.0','Win 95+','4','X'],
                ['Trident','Internet Explorer 5.0','Win 95+','5','C'],
                ['Trident','Internet Explorer 5.5','Win 95+','5.5','A'],
                ['Trident','Internet Explorer 6','Win 98+','6','A'],
                ['Trident','Internet Explorer 7','Win XP SP2+','7','A'],
                ['Trident','AOL browser (AOL desktop)','Win XP','6','A'],
                ['Gecko','Firefox 1.0','Win 98+ / OSX.2+','1.7','A'],
                ['Gecko','Firefox 1.5','Win 98+ / OSX.2+','1.8','A'],
                ['Gecko','Firefox 2.0','Win 98+ / OSX.2+','1.8','A'],
                ['Gecko','Firefox 3.0','Win 2k+ / OSX.3+','1.9','A'],
                ['Gecko','Camino 1.0','OSX.2+','1.8','A'],
                ['Gecko','Camino 1.5','OSX.3+','1.8','A'],
                ['Gecko','Netscape 7.2','Win 95+ / Mac OS 8.6-9.2','1.7','A'],
                ['Gecko','Netscape Browser 8','Win 98SE+','1.7','A'],
                ['Gecko','Netscape Navigator 9','Win 98+ / OSX.2+','1.8','A'],
                ['Gecko','Mozilla 1.0','Win 95+ / OSX.1+',1,'A'],
                ['Gecko','Mozilla 1.1','Win 95+ / OSX.1+',1.1,'A'],
                ['Gecko','Mozilla 1.2','Win 95+ / OSX.1+',1.2,'A'],
                ['Gecko','Mozilla 1.3','Win 95+ / OSX.1+',1.3,'A'],
                ['Gecko','Mozilla 1.4','Win 95+ / OSX.1+',1.4,'A'],
                ['Gecko','Mozilla 1.5','Win 95+ / OSX.1+',1.5,'A'],
                ['Gecko','Mozilla 1.6','Win 95+ / OSX.1+',1.6,'A'],
                ['Gecko','Mozilla 1.7','Win 98+ / OSX.1+',1.7,'A'],
                ['Gecko','Mozilla 1.8','Win 98+ / OSX.1+',1.8,'A']];

            $('#example').dataTable( {
                "aaData": aDataSet,
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
        });
    }
});

App.ApplicationView = Ember.View.extend({
    templateName: 'application'
});

App.MovieView = Ember.View.extend({
    templateName: 'movie'
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