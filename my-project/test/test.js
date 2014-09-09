var chai = require('chai')
var expect = chai.expect;




var sharedWords = function(duration, fn) {
  console.log('setting the timer for %d minutes', duration);
  setTimeout(function() {

    console.log('The timer is going off!!!');
    fn();
  }, 30);
};


describe('sharedWords', function() {
  it('finds shared words', function(done) {
    sharedWords(30, function() {
      
      e();
    });
  });
});