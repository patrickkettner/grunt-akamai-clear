# grunt-akamai-clear

Request Akamai purge/invalidation.

## Getting Started
Install this grunt plugin next to your project's [Gruntfile][getting_started] with: `npm install grunt-akamai-clear`

Then add this line to your project's Gruntfile:

```javascript
grunt.loadNpmTasks('grunt-akamai-clear');
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation

Add the 'akamai' job to your grunt config

```javascript
  akamai: {
     production: {
      user: 'akamai_account@awesome_startup.biz',
      password: '$00p3r-1337',
      urls: ['http://www.awesome_startup.biz/js/scripts.min.js', 'http://www.awesome_startup.biz/css/style.css'],
      notify: ['all_t3h_d3vs@awesome_startup.biz']
    },
     staging: {
      user: 'akamai_account@awesome_startup.biz',
      password: '$00p3r-1337',
      urls: ['http://staging.awesome_startup.biz/js/scripts.min.js', 'http://staging.awesome_startup.biz/css/style.css'],
      notify: ['ninja_d3v@awesome_startup.biz']
    }
  }
```

## Release History
0.1.0 - initial release

## License
Copyright (c) 2012 Patrick Kettner
Licensed under the MIT license.
