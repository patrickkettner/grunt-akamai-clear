/*
 * grunt-akamai-clear
 * https://github.com/patrickkettner/grunt-akamai-clear
 *
 * Copyright (c) 2012 Patrick Kettner
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var akamai = require('akamai');

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('akamai', 'Purge/Invalidate Akamai', function() {
    var done = this.async();
    var data = this.data;

    var thisPurge = new akamai.purge(
      data.urls, {
      user: data.user,
      password: data.password,
      domain: (data.domain || 'production'),
      notify: data.notify
    }, function (err, response) {
      if (err) {
        grunt.log.error(err);
        return;
      }

      done('akamai request sent');
    });
  });

};
