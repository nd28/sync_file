//IIFE - Immediately Invoked Function Expression
//* Creates Closure
//* Doesn't add to or modify globel object
// ----------------------------------------------
//:
const SayHello = (function () {
	var message = 'Hello!'

	function sayHello() {
	  console.log(message)
	}

	return sayHello
})()

//console.log('typeof message:', typeof message)
//console.log(SayHello.toString())

//SayHello()

const counter = (function () {
	let count = 0 // count is not accessible by globel scope
	return {
	  inc: function() { count = count + 1},
	  get: function() { console.log(count)},
	}
})()

counter.get()
counter.inc()
counter.get()

// ----------------------------------------------
