module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {
            compile: {
                files: [{
                    expand: true,
                    cwd: './style/sass',
                    src: ['*.scss'],
                    dest: './style/css',
                    ext: '.css'
                }]
            }
        },
        watch: {
			mobile_styles: {
				files: ['./style/sass/**/*.scss'],
				tasks: ['sass']
			}
		},
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('compile', ['sass:compile']);
};
