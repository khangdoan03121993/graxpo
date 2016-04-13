module.exports = function(grunt) {

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	var config = {

		/* Path variables
		-------------------------------------------*/
		src: 'src',
		src_js: 'src/js',
		src_less: 'src/less',
		src_css: 'src/css',
		src_html: 'src/html',

		dest: 'dest',
		dest_js: 'dest/js',
		dest_css: 'dest/css',

		/* Watch
		-------------------------------------------*/
		watch: {
			options: {
				spawn: false
			},
			grunt: {
				files: ['Gruntfile.js']
			},
			css: {
				files: ['<%= src %>/**/*.less'],
				tasks: ['less']
			},
			js: {
				files: [
					'<%= src_js %>/*.js',
					'<%= src_css %>/*.css'
				],
				tasks: ['concat']
			},
			jsmin: {
				files: [
					'<%= src_js %>/*.js',
				],
				tasks: ['uglify']
			},
			cssmin: {
				files: [
					'<%= src_css %>/*.css',
				],
				tasks: ['cssmin']
			},
			html: {
				files: ['<%= src %>/**/*.html'],
				tasks: ['htmlbuild']
			},
		},

		browserSync: {
			default_options: {
				bsFiles: {
					src: [
						"<%= dest_css %>/*.css",
					]
				},
				options: {
					watchTask: true,
					proxy: "http://localhost/"
				}
			}
		},

		/* Uglify
		-------------------------------------------*/
		uglify: {
			dist: {
				files: {
					'<%= dest_js %>/plugins.min.js': ['<%= dest_js %>/plugins.js']
				}
			}
		},

		/* LESS
		-------------------------------------------*/
		less: {
			development: {
				options: {
					paths: ["less"]
				},
				files: {
					"<%= dest_css %>/style.css": "<%= src_less %>/style.less"
				}
			},
		},
		/* Concat
		-------------------------------------------*/
		concat: {
			js: {
				src: ['<%= src_js %>/*.js','!<%= src_js %>/custom.js','<%= src_js %>/custom.js'],
				dest: '<%= dest_js %>/plugins.js'
			},
			css: {
				src: '<%= src_css %>/*.css',
				dest: '<%= dest_css %>/plugins.css'
			}
		},
		/* HTML Build
		-------------------------------------------*/
		htmlbuild: {
			dest: {
				src: '<%= src %>/*.html',
				dest: '<%= dest %>/',
				options: {
					relative: true,
					sections: {
						section: {
							// demo: '<%= src_html %>/demo.html',
						},
						entry: {     
						},
						module: {
						},
						modal: {
						},
						layout: {
							head: '<%= src_html %>/head.html',
							header: '<%= src_html %>/header.html',
							foot: '<%= src_html %>/foot.html',
							footer: '<%= src_html %>/footer.html',
							
							// body
							about: '<%= src_html %>/about.html',
							service: '<%= src_html %>/best-service.html',
							blog: '<%= src_html %>/blog.html',
							crew: '<%= src_html %>/crew.html',
							feature: '<%= src_html %>/featured-work.html',
							ideas: '<%= src_html %>/ideas.html',
							parameter: '<%= src_html %>/parameter.html',
							porfolio: '<%= src_html %>/porfolio.html',
							price: '<%= src_html %>/price.html',
							subscribe: '<%= src_html %>/subscribe.html',
							test: '<%= src_html %>/testimonials.html',
							steps: '<%= src_html %>/three-simple-steps.html',
							title: '<%= src_html %>/title.html',
							do: '<%= src_html %>/what-we-do.html',
						}
					},
					data: {
						version: "1.0",
						title: "ACIS"
					}
				}
			}
		}
	};

	grunt.initConfig(config);
	grunt.registerTask('default', ['browserSync', 'watch']);
}