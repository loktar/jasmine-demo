describe("$.fn.zipCode", function() {
  function setupZipCode() {
    $('.enter_zip').zipCode();
  }

  beforeEach(function() {
    jasmine.loadFixture('index.html');
  });

  it("should hide the ZIP Code overlay by default", function() {
    setupZipCode();
    expect('#overlay').toHaveCss('display', 'none');
  });

  it("should show the ZIP Code overlay when the button is clicked", function() {
    setupZipCode();
    $('.enter_zip').click();
    expect('#overlay').toHaveCss('display', 'block');
  });

  describe("when the user submits their ZIP Code", function() {
    it("should remember it in a cookie", function() {
      setupZipCode();
      $('.enter_zip').click();
      $('#zip').val('94901');
      $('#overlay button').click();
      expect($.cookie('zip')).toEqual('94901');
    });

    it("should hide the overlay", function() {
      setupZipCode();
      $('.enter_zip').click();
      expect('#overlay').toHaveCss('display', 'block');
      $('#zip').val('94901');
      $('#overlay button').click();      
      expect('#overlay').toHaveCss('display', 'none');
    });

    describe("when the user visits the page again", function() {
      it("should set the ZIP Code message", function() {
        $.cookie('zip', '12345');
        setupZipCode();
        expect($('.message').text()).toEqual('Your ZIP Code is 12345');
      });
    });
  });
});