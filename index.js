'use strict';
module.exports = FrequencyCounter;

function FrequencyCounter() {
  if (!(this instanceof FrequencyCounter)) {
    return new FrequencyCounter();
  }
  this.dict = Object.create(null);
  this.highest = 0;
  this._most = [];
  this.universal = true;
}

var fcp = FrequencyCounter.prototype;

fcp.add = function add(str) {
  str = String(str);
  var count = this.dict[str] = this.count(str) + 1;
  if (count === this.highest) {
    this._most.push(str);
    this.universal = false;
  } else if (count > this.highest) {
    this._most = [str];
  } else {
    this.universal = this.universal && this._most.length === 1 && this._most[0] === str;
    return;
  }
  this.highest = count;
};

fcp.most = function(str) {
  return this._most.indexOf(String(str)) !== -1;
};

fcp.uniquelyMost = function(str) {
  return this._most.length === 1 && this._most[0] === String(str);
};

fcp.count = function(str) {
  return this.dict[String(str)] || 0;
};
