(function() {
  if ('registerElement' in document && 'import' in document.createElement('link') && 'content' in document.createElement('template')) {
    // platform is good!
  } else {
    // polyfill the platform!
    console.log("Polyfill webcomponentsjs");
    var e = document.createElement('script');
    e.src = '/bower_components/webcomponentsjs/webcomponents-lite.js';
    document.body.appendChild(e);
  }
})();
