module.exports = function(grunt){
    grunt.initConfig(
        {
            nodemon:{
                dev:{script : 'server.js'}//nodemon will look for the changes everytime
            }
        }
    );
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.registerTask('default',['nodemon']);
} 
//https://gruntjs.com/configuring-tasks