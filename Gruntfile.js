// This shows a full config file!
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-image');
    grunt.initConfig({
        image: {
          static: {
              options: {
                optipng: false,
                pngquant: true,
                zopflipng: true,
                jpegRecompress: false,
                mozjpeg: true,
                guetzli: false,
                gifsicle: true,
                svgo: true
            },
            files: {
              //'dist/images/img.png': 'src/images/img.png',
          }
      },
      dynamic: {
        files: [{
          expand: true,
          cwd: 'sourceimages/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'images/'
      }]
  }
}
});

    // load npm tasks
    grunt.loadNpmTasks('grunt-image');

    // define default task
    grunt.registerTask('default', ['image']);
};