// First-Class Functions-----
// * Functions are treated the same way as any other value.
// 	* can be pass as argument to other function
// 	* can be assigned to variables, array values, object values.
// 	* can be returned from the functions.
// * Allows for the creation of higher-order functions.
// 	* Either takes one or more functions as arguments or returns a function.
// 	* map(), reduce(), filter()

// -------------------------------------------------------------------------------
// 	Microsoft Windows [Version 10.0.22000.376]
// 	(c) Microsoft Corporation. All rights reserved.
// 	D:\help>node

	const x = [0,1,2,3]

	function addOne(number) { return number + 1}
	x.map(addOne)
	// outputs [ 1, 2, 3, 4 ]
 	function isGreaterThanOne(num) {return num > 1}
	x.filter(isGreaterThanOne)
	// outputs [ 2, 3 ]
	function add(x, y) {return x + y}
	x.reduce(add)
	// outputs 6

