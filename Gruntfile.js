module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.initConfig({

        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['dev/scripts/components/*.js'],
                dest: 'dev/scripts/script.js',
            },
        },
        uglify: {
            my_target: {
                files: {
                    'dev/scripts/script.min.js': ['dev/scripts/script.js']
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dev/styles/style.css': 'dev/styles/style.scss',
                }
            }
        },
        autoprefixer: {
            dist: {
                src: 'dev/styles/style.css'
            }
        },
        watch: {
            styles: {
                files: [
                    'dev/styles/*.scss',
                    'dev/styles/0_settings/*.scss',
                    'dev/styles/1_base/*.scss',
                    'dev/styles/2_sections/*.scss',
                    'dev/styles/3_components/*.scss',
                    'dev/styles/4_layouts/*.scss',
                    'dev/index.html',
                    'dev/scripts/*.js',
                    'dev/scripts/components/*.js',
                    'dev/scripts/lib/*.js'
                ],
                tasks: ['sass', 'autoprefixer', 'copy'],
                options: {
                    livereload: true,
                },
            },
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'dev/',
                    src: ['*.html'],
                    dest: 'build'
                }, {
                    expand: true,
                    cwd: 'dev/styles',
                    src: ['*.css'],
                    dest: 'build/styles'
                }, {
                    expand: true,
                    cwd: 'dev/scripts',
                    src: ['*.js'],
                    dest: 'build/scripts'
                }, {
                    expand: true,
                    cwd: 'dev/scripts/lib',
                    src: ['*.js'],
                    dest: 'build/scripts/lib'
                }, {
                    expand: true,
                    cwd: 'dev/images',
                    src: ['**'],
                    dest: 'build/images'
                }, {
                    expand: true,
                    cwd: 'dev/fonts',
                    src: ['**'],
                    dest: 'build/fonts'
                }],
            },
        },
        'ftp-deploy': {
            build: {
                auth: {
                    host: '',
                    port: 21,
                    authKey: 'key1'
                },
                src: 'build/',
                dest: '',
                exclusions: ['build/**/.DS_Store', 'build/**/Thumbs.db']
            }
        },
    });

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('js', ['concat', 'uglify']);
};