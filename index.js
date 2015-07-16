'use strict';
module.exports = FrequencyCounter;

function FrequencyCounter() {
  if (!(this instanceof FrequencyCounter)) {
    return new FrequencyCounter();
  }
  this.dict = Object.create(null);
  this.highest = 0;
  this._most = [];
}

var fcp = FrequencyCounter.prototype;

fcp.add = function add(str) {
  var count = this.dict[str] = this.count(str) + 1;
  if (count === this.highest) {
    this._most.push(str);
  } else if (count > this.highest) {
    this._most = [str];
  } else {
    return;
  }
  this.highest = count;
};

fcp.most = function(str) {
  return this._most.indexOf(str) !== -1;
};

fcp.uniquelyMost = function(str) {
  return this._most.length === 1 && this._most[0] === str;
};

fcp.count = function(str) {
  return this.dict[str] || 0;
};
