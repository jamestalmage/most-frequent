# most-frequent 

Track which value occurs most frequently

[![Build Status](https://travis-ci.org/jamestalmage/most-frequent.svg?branch=master)](https://travis-ci.org/jamestalmage/most-frequent)
[![Coverage Status](https://coveralls.io/repos/jamestalmage/most-frequent/badge.svg?branch=master&service=github)](https://coveralls.io/github/jamestalmage/most-frequent?branch=master)
[![Code Climate](https://codeclimate.com/github/jamestalmage/most-frequent/badges/gpa.svg)](https://codeclimate.com/github/jamestalmage/most-frequent)
[![Dependency Status](https://david-dm.org/jamestalmage/most-frequent.svg)](https://david-dm.org/jamestalmage/most-frequent)
[![devDependency Status](https://david-dm.org/jamestalmage/most-frequent/dev-status.svg)](https://david-dm.org/jamestalmage/most-frequent#info=devDependencies)

[![NPM](https://nodei.co/npm/most-frequent.png)](https://nodei.co/npm/most-frequent/)

## Usage

```js
var f = require('most-frequent');

f.add('a');
f.add('a');
f.add('b');
f.add('b');

f.most('a');        // a and b are tied for most frequent
//=> true
f.most('b');
//=> true

f.uniquelyMost('a');
//=> false;

f.add('a');

f.uniquelyMost('a');
//=> true;

f.most('b');
//=> false;

f.count('a');
//=> 3;

```

## API

### new MostFrequent()

Create a new `MostFrequent` instance (referred to as `f` in the rest of the documentation).

#### f.add(value)

Increment the count of `value` by one.

#### f.count(value)

Returns the count for `value`. (how many times `add(..)` has been called with that same value).
Should be a string or a number.

#### f.most(value)

returns `true` if `value` has a `count` *greater than or equal to* all other values.

#### f.uniquelyMost(value)

returns `true` if `value` has a `count` *greater than* all other values.

#### f.universal

true `true` if every call to `add` has been with the same value.

## License

MIT © [James Talmage](http://github.com/jamestalmage)
