// The following comments are settings for various linters
// Not sure if a reported error matters? Look it up at http://linterrors.com/js
/*global math: false, calc: false, console: false, eval: false */

/*jslint es5: true */
/*jslint node: false*/
/*jslint browser: true*/
/*jslint devel: true*/
/*jslint plusplus: true */
/*jslint evil: true */

/*jshint es5: true */
/*jshint globalstrict: true*/
/*jshint jquery: false*/
/*jshint node: false*/
/*jshint browser: true*/
/*jshint devel: true*/

/*eslint-env jquery: false*/
/*eslint-env browser*/
/*eslint no-console: 0*/

// CS22A: A Basic Calculator Part 3 - calcu() function with if-else

var calcu = function (calcValue) {
  "use strict";
  if (calcValue) {
    // calcValue wasn't null or undefined'

    //Complete the calcu function in the js/ifelse.js file using a
    //if...else if...else statement.

    if (calcValue === "c") {
      calc.output.value = "";
    } else if (calcValue === "equate") {
      calc.output.value = math.eval(calc.output.value);
    }
    // this else statement accounts for numbers 0-9 and symbols +,*,-,/
    else calc.output.value += calcValue;
  }
};

// TODO: Complete the clickEventHandler function and then below it bind input
// elements' (only those that are buttons) onclick property to clickEventHandler.
// Don't use window.onload!
// Usually using window.onload is a good idea,
// but that prevents the Jasmine test suite from loading and since the
// script tag for ifelse.js must be deferred and there are no big images to
// slow the loading of the HTML elements down it will all work OK without that.
var clickEventHandler = function (event) {
  "use strict";
  // TODO: Add missing code

  // In js/ifelse.js complete the clickEventHandler function to call the calcu
  // function from inside of it.
  // Make sure you pass this.id to calcu so calcu will have the correct value for
  // its internal calcValue variable.
  calcu(this.id);
};
// At the very bottom of the file (after the clickEventHandler function), add code
// to get all the input elements into an array-like HTMLCollection called inputs
// (using document.getElementsByTagName (Links to an external site.)) and use a
// for-loop to iterate through the array.
var elems = document.getElementsByTagName("input");

for (var thingy = 0; thingy < elems.length; ++thingy) {
  // During the for-loop you will use an if statement to skip the input element
  // that is not a button
  if (elems[thingy].type === "button") {
    // Then set the other input elements' onclick handler to the clickEventHandler
    // function (that calls the calcu function from inside of it).
    elems[thingy].onclick = clickEventHandler;
  }
}
