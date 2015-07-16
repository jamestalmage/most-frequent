'use strict';
describe('frequency-counter', function() {
  var FC = require('..');
  var assert = require('assert');

  var fc;

  beforeEach(function() {
    fc = new FC();
  });

  it('most vs uniquelyMost', function() {
    fc.add('1');
    fc.add('2');
    fc.add('1');
    assert(fc.most('1'), '1 is most');
    assert(fc.uniquelyMost('1'), '1 is uniquely most');
    assert(!fc.most('2'), '2 is not the most');
    fc.add('2');
    fc.add('3');
    assert(fc.most('1'), '1 should still be most');
    assert(!fc.uniquelyMost('1'), '1 is no longer uniquely most');
    assert(fc.most('2'), '2 is also the most');
    assert(!fc.uniquelyMost('2'), '1 is no longer uniquely most');
    assert(!fc.most('3'), '3 is not the most');
  });

  it('handles constructor calls without new', function() {
    fc = FC();
    fc.add('1');
    assert(fc.most('1'));
  });

  it('keeps count', function() {
    fc.add('1');
    assert.strictEqual(fc.count('1'), 1);
    fc.add('1');
    assert.strictEqual(fc.count('1'), 2);
    fc.add('1');
    assert.strictEqual(fc.count('1'), 3);
    fc.add('2');
    assert.strictEqual(fc.count('2'), 1);
    assert.strictEqual(fc.count('1'), 3);
    fc.add('1');
    assert.strictEqual(fc.count('1'), 4);
  });

  it('works with numbers', function() {
    fc.add(1);
    assert.strictEqual(fc.count(1), 1);
    assert.strictEqual(fc.most(1), true);
    assert.strictEqual(fc.uniquelyMost(1), true);
    fc.add(1);
    assert.strictEqual(fc.count(1), 2);
    fc.add(1);
    assert.strictEqual(fc.count(1), 3);
    fc.add(2);
    assert.strictEqual(fc.count(2), 1);
    assert.strictEqual(fc.count(1), 3);
    fc.add(1);
    assert.strictEqual(fc.count(1), 4);
  });

  it('universal', function() {
    assert.strictEqual(fc.universal, true);
    fc.add(1);
    assert.strictEqual(fc.universal, true);
    fc.add(1);
    assert.strictEqual(fc.universal, true);
    fc.add(1);
    assert.strictEqual(fc.universal, true);
    fc.add(2);
    assert.strictEqual(fc.universal, false);
  });

  it('universal', function() {
    assert.strictEqual(fc.universal, true);
    fc.add(1);
    assert.strictEqual(fc.universal, true);
    fc.add(2);
    assert.strictEqual(fc.universal, false);
  });
});
