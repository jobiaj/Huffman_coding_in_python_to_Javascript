function encode (str) {
     	var output = "";
     	for (var ch in str) {
		 output = output + codes[str[ch]];
	}
return output
}
str = "aaabccdeeeeeffg"
console.log(encode(str))




