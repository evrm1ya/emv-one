
import {expect} from 'chai';
import {linkProps} from '../js/stores/nav/link-store';

describe('link store', () => {
  it('returns correct length', () => {
    expect(linkProps.length).to.equal(5);
  });
});
