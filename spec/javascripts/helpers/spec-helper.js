jasmine.content = function() {
  return $('#jasmine_content');
};

jasmine.loadFixture = function(path) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "public/" + path + "?" + Date.now(), false);
  xhr.send();
  jasmine.content().append($(xhr.responseText));
};

beforeEach(function() {
  jasmine.content().empty();
  $.fx.off = true;

  this.addMatchers({
    toHaveCss: function(key, value) {
      return $(this.actual).css(key) === value;
    }
  });

  mock_cookies();
});

var cookies;
function mock_cookies() {
  cookies = {};
  spyOn($, 'cookie').andCallFake(function(key, value) {
    if (arguments.length === 1) {
      return cookies[key];
    } else {
      cookies[key] = value;
    }
  });
}