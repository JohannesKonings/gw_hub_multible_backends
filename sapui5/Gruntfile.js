module.exports = function (grunt) {
  var sUser = grunt.option("user");
  var sPwd = grunt.option("pwd");

  grunt.initConfig({
    // eslint-disable-next-line camelcase
    nwabap_ui5uploader: {
      options: {
        conn: {
          server: "https://vhcalnplci:44300",
        },
        auth: {
          user: sUser,
          pwd: sPwd,
        },
      },
      // eslint-disable-next-line camelcase
      upload_build: {
        options: {
          ui5: {
            package: "$SAPUI5_MULTIBLE_BACKENDS",
            bspcontainer: "Z_UI5_MULTI",
            // eslint-disable-next-line camelcase
            bspcontainer_text: "UI5 multible backends",
          },
          resources: {
            cwd: "build-folder",
            src: "**/*.*",
          },
        },
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks("grunt-nwabap-ui5uploader");

  // Default task(s).
  grunt.registerTask("ui5-upload", ["nwabap_ui5uploader"]);
};
