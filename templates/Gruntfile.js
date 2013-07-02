module.exports = function (grunt) {

    //CONFIGURATION - START

    grunt.initConfig({

        //pkg: grunt.file.readJSON('package.json'),

        emberTemplates: {
            compile: {
                options: {
                    namespace: "App.templates",
                    processName: function(argFileName){
                        var tmpSlashLastIndex = argFileName.lastIndexOf("/") + 1;
                        var tmpDotLastIndex = argFileName.lastIndexOf(".");
                        return argFileName.substring(tmpSlashLastIndex,tmpDotLastIndex);
                    }
                },
                files: {
                    "../compile-templates/home.js": "home.handlebars"
                }
            }
        }

    });

    //CONFIGURATION - END

    //PLUGINS - START

    grunt.loadNpmTasks('grunt-ember-templates');

    //PLUGINS - END

    //TASKS - START

    grunt.registerTask('default', ['emberTemplates']);

    //TASKS - START

};
