
import {expect} from 'chai';
import {Dispatcher, _callbacks} from '../js/dispatcher/dispatcher';

describe('Dispatcher suite', () => {
  describe('register proto', () => {
    function testCB() {
      return 1;
    }
    var testDispatcher = new Dispatcher();
    var testRegister = testDispatcher.register(testCB);
    it('returns 0', () => {
      expect(testRegister).to.equal(0);
    });
    it('pushes fcn to _callbacks', () => {
      let cbsLength = _callbacks.length;
      expect(cbsLength).to.equal(1);
    });
  });
});


