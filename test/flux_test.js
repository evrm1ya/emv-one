
import {expect} from 'chai';
import Dispatcher from '../node_modules/flux/lib/Dispatcher';

describe('Dispatcher suite', () => {

  describe('_classCallCheck', () => {
    var errMsg = 'Cannot call a class as a function';
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        return errMsg;
      }
      return 'Success';
    }
    class Animal {
      constructor(name) {
        this.name = name;
      }
    }
    class Vehicle {
      constructor(name) {
        this.name = name;
      }
    }
    let dog = new Animal('dog');
    let car = new Vehicle('car');
    it('returns error msg', () => {
      let result = _classCallCheck(car, Animal);
      expect(result).to.equal(errMsg);
    });
    it('returns success', () => {
      let result = _classCallCheck(car, Vehicle);
      expect(result).to.equal('Success');
    });
  });


  describe('Dispatcher.register', () => {
    let testDispatcher = new Dispatcher();
    let testReg = testDispatcher.register(function() {
      return 1;
    });
    it('returns ID_1', () => {
      expect(testReg).to.equal('ID_1');
    });
    it('adds a fcn to _callbacks obj', () => {
      expect(testDispatcher._callbacks['ID_1']).to.be.a('function');
    });
    it('returns correct val', () => {
      let result = testDispatcher._callbacks['ID_1']();
      expect(result).to.equal(1);
    });
  });

  describe('Dispatcher.unregister', () => {
    let testDispatcherTwo = new Dispatcher();
    let testReg = testDispatcherTwo.register(function() { return 'here'; });
    it('added correct callback', () => {
      let result = testDispatcherTwo._callbacks['ID_1']();
      expect(result).to.equal('here');
    });
    it('removed the callback from _callbacks', () => {
      testDispatcherTwo.unregister('ID_1');
      expect(testDispatcherTwo._callbacks['ID_1']).to.be.undefined;
    });
  });
});

