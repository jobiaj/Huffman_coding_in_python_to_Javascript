function sortFreq(dict) {
     	var tuples = [];
     	for(var key in dict) {
        	tuples.push([dict[key],key]);
	}
     	return tuples.sort();
	}
console.log(sortFreq({'a': 3, 'c': 2, 'b': 1, 'e': 5, 'd': 1, 'g': 1, 'f': 2}));

