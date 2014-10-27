function decode(tree,str) {
     	var output = "";
     	p = tree
	for (var bit in str) {
         	if (str[bit] == '0') { 
			p = p[0];     
	 	}
         	else          {
			p = p[1];
	 	}     
         	if (typeof(p) == typeof("")) {     
             		output = (output + p) ;             
            		 p = tree  ;          
	 	}	
	}
     	return output;
}
console.log(decode(tree,encode(str)))
