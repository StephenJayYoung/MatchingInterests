var chai = require('chai')
var expect = chai.expect;

var functions = require('../index');
var compareWords = functions.compareWords;


/**
 * Needs to turn 2 strings into an array
 * We need to send out function two things that it needs to split
 * 
 * 
 */

describe('comparedWords', function() {
  it('finds compares words', function() {
   var words1 = ['runner', 'music maker', 'hiker']
   var words2 = ['runner', 'swimmer', 'soccer player']
   var result = compareWords(words1, words2);
   expect(result).to.eql(['runner']);
  });
});









// var sharedWords = function(duration, fn) {
//   console.log('setting the timer for %d minutes', duration);
//   setTimeout(function() {

//     console.log('The timer is going off!!!');
//     fn();
//   }, 30);
// };
