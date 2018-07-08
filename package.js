
Package.describe({
  name: 'skt:wysihtml5',
  version: '0.1.0',
  summary: 'A Meteor package wrapper for the wysihtml5 editor',
  git: 'https://github.com/sekmet/meteor-wysihtml5.git',
  documentation: 'README.md'
});

Package.onUse((api) => {
  api.versionsFrom('1.4');
  api.addFiles('bootstrap-wysihtml5.css', 'client');
  api.addFiles('wysihtml5-0.3.0.js', 'client');
  api.mainModule('bootstrap-wysihtml5.js', 'client');
});
