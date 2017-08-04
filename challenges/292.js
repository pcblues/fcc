/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.
*/

var Person = function(firstAndLast) {
    var fnl = firstAndLast;
    this.getFirstName=function() {return fnl.slice(0,fnl.indexOf(' '));};
    this.getLastName=function() {return fnl.slice(fnl.indexOf(' ')+1);};
    this.getFullName=function() {return this.getFirstName()+" "+this.getLastName()};
    this.setFirstName= function(firstName){fnl=firstName+" "+this.getLastName();};
    this.setLastName=function(lastName) {fnl=this.getFirstName()+" "+lastName};
    this.setFullName=function(firstAndLast) { fnl=firstAndLast;};
};

var bob = new Person('Bob Ross');
//bob.setFirstName("Haskell");
//console.log(bob.getFullName());
