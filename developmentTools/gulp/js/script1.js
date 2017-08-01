(function(console) {
  'use strict';

  function Person(name) {
    console.log('constructor called');
    this.name = name;
  }

  Person.prototype.sayName = function() {
    console.log(this.name);
  }

  var person = Person('Tom');
  person.sayName();

})(console);
