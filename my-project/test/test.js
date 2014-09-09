var chai = require('chai')
var expect = chai.expect;




var sharedWords = function(duration, fn) {
  console.log('setting the timer for %d minutes', duration);
  setTimeout(function() {

    console.log('The timer is going off!!!');
    fn();
  }, 30);
};


/**
 * Needs to turn 2 strings into an array
 * We need to send out function two things that it needs to split
 * 
 * 
 */

describe('comparedwords', function() {
  it('finds compares words', function(done) {
   var words1 = []
   var words2 = []
   var commonWords = compareWords(words1, words2);
   expect (???).to.eql(???);
    });
  });
});