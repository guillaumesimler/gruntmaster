// Master Grunt Gruntfile.js
// Author: Guillaume Simler (for more info please check my Github Profile)
// Configured in March 2013


module.exports = function(grunt) {

    // 1. configuration starts here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // 2. add your plug-ins' config here below

        // Minify  css

        cssmin: {
             target: {
                files: [{
                    expand: true,
                    cwd: 'src/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dir/css/',
                    ext: '.min.css'
            }]
          }
        },

        // inline CSS

        inlinecss: {
            main: {
                options: {
                },
                files: {
                'dir/index.html': 'src/index.html'
                }
            }
        },

        // Minify HTML

        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
                },
          
                // Dictionary of files
                files: {                                   
                    'dir/index.html': 'dir/index.html'        // 'destination': 'source'
                }
            }
        }, 

        // Responsive imagine
        clean: {
            dev: {
                src: ['dir/images'],
            },
        },

        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [
                        {
                            width: 400,
                            quality: 80,
                            suffix: '_2x'
                        },

                        { 
                            width: 400,
                            quality: 40,
                            Suffix: '_1x'
                        }
                    ]
                },
            
                files: [{
                  expand: true,
                  src: ['**.{jpg,gif,png}','P1000698.jpg', '**.jpg', '*.jpg'],
                  cwd: 'src/images/',
                  dest: 'dir/images/'
                }]
            }
        }
    });

    // 3. load your plug-ins
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-inline-css');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // 4. progran starter (don't forget to add the plugin)
    grunt.registerTask('default', ['cssmin','htmlmin', 'clean', 'responsive_images']);

};