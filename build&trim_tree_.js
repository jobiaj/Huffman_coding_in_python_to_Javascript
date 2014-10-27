function buildTree(tuples) {

	while(tuples.length > 1) {

         	var leastTwo = [tuples[0][1], tuples[1][1]];                  
         	var theRest  = tuples.slice(2,tuples.length);                        	
		var combFreq = tuples[0][0] + tuples[1][0];  
         	tuples   = theRest;
	 	sample = [combFreq, leastTwo];
	 	tuples.push(sample);
		tuples.sort();                
        }            
     return tuples;
}
function trimtree(tuples){
	return tuples[0][1];
}
console.log(trimtree(buildTree([ [ 1, 'b' ],[ 1, 'd' ],[ 1, 'g' ],[ 2, 'c' ],[ 2, 'f' ],[ 3, 'a' ],[ 5, 'e' ] ])));
