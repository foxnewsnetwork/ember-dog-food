# Ember-dog-food
[![Build Status](https://travis-ci.org/foxnewsnetwork/ember-dog-food.svg)](https://travis-ci.org/foxnewsnetwork/ember-dog-food)

This README illustrates a problem with ember-cli's scaffold of an addon project running npm test.

Here's my environment:
```sh
$ ember -v
version: 0.2.3
Could not find watchman, falling back to NodeWatcher for file system events.
Visit http://www.ember-cli.com/#watchman for more info.
node: 0.12.0
npm: 2.7.6
```
Here's what I did:
```sh
ember addon ember-dog-food
cd ember-dog-food
sublime . # here I put in the two files at tests/dummy/app/models/person.js and tests/unit/models/person-test.js
ember serve # the tests run fine localhost:4200/tests
npm test # this doesn't work
```
After I did all that, I then pushed up this project to github and contributed to the issue at:

https://github.com/ember-cli/ember-cli/issues/3977

On another corollary, travis-ci doesn't work either; it experiences a build error.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
