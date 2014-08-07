module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({ 
  
    files: [
      "src/**/*.purs",
      "bower_components/purescript-*/src/**/*.purs*"
    ],
    
    clean: {
      all: ["tmp", "output"]
    },
  
    pscMake: {
      all: {
        src: "<%=files%>"
      }
    },

    dotPsci: ["<%=files%>"],

    copy: [
      {
        expand: true, 
        cwd: "output",
        src: ["**"], 
        dest: "tmp/node_modules/"
      }, {
        src: ["js/index.js"],
        dest: "tmp/index.js"
      }
    ],

    browserify: {
      all: {
        src: ["tmp/index.js"],
        dest: "app/js/game.js"
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          livereload: true
        }
      }
    },

    watch: {
      psFiles: {
        files: "<%= files %>",
        tasks: ["pscMake:all", "copy", "dotPsci", "browserify:all"]
      },
      scripts: {
        files: 'app/js/game.js',
        tasks: [],
        options: {
          livereload: true,
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-purescript");

  grunt.registerTask("default" , ["pscMake:all", "copy", "dotPsci", "browserify:all", "connect", "watch"]);
};