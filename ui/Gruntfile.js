"use strict";

module.exports = function(grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		bower:
		{
			install:
			{
				options:
				{
					targetDir: "dist/public/lib",
					layout: "byComponent",
					cleanTargetDir: true,
					cleanBowerDir: true
				}
			}
		},
		browserify:
		{
			app:
			{
				src: "angtest-demo/app.js",
				dest: "dist/angtest-demo.js"
			}
		},
		copy:
		{
			app:
			{
				files:
				[
					{ expand: false, src: ["dist/angtest-demo.js"], dest: "dist/public/angtest-demo.js", filter: 'isFile' },
					{ expand: true, cwd: "dist/public", src: ["**"], dest: "../public" }
				],
			},
		}
	});

	grunt.loadNpmTasks("grunt-bower-task");
	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask("default", ["bower", "browserify", "copy"]);
	
};