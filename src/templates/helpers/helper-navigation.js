(function() {
  module.exports.register = function(Handlebars) {

    Handlebars.registerHelper('isMenuItemActive', function(currentPageName, staticPageName) {
      var active = '';
      if (currentPageName === staticPageName) {
        active = 'style="color:red;"';
      }
      return new Handlebars.SafeString(active);
    });

  };
}).call(this);
