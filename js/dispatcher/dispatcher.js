
import {Promise} from 'es6-promise';

var _callbacks = [];
var _promises = [];

class Dispatcher {
  register(callback) {
    _callbacks.push(callback);
    return _callbacks.length - 1;
  }
}


export {Dispatcher, _callbacks};


