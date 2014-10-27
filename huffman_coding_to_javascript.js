//#Conversion of huffman coding to javascript


codes = {}
//function to get frequency of numbers
function getf(str) {
        var freq = {};
        var i = str.length;
        for (var j = 0; j<i; j++)
                {
                        var chara = str.charAt(j);
                        if (freq[chara])
                                {       freq[chara]++;
                                }
                        else
                                {
                                freq[chara]=1;
                                }
                }
                return freq;
}


//console.log(getf("aaabccdeeeeeffg"))


//function to sort the dictionary get from above result
function sortFreq(freq) {
        var tuples = [];
        for(var key in freq) {
                tuples.push([freq[key],key]);
        }
        return tuples.sort();
}
//console.log(sortFreq(getf("aaabccdeeeeeffg")))


//To build and trim the tree
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

//console.log(buildTree(sortFreq(getf("aaabccdeeeeeffg"))))

function trimTree(tuples) {
        return tuples[0][1];
}


//console.log(trimTree(buildTree(sortFreq(getf("aaabccdeeeeeffg")))))




//convert the character to a code
function assignCodes (node, pat) {
     pat = pat || "";
     if (typeof node == typeof "") {
         codes[node] = pat;
     }
     else {
         assignCodes(node[0], pat+"0");
         assignCodes(node[1], pat+"1");
     }
}
tree= trimTree(buildTree(sortFreq(getf("aaabccdeeeeeffg"))))
assignCodes(tree);
console.log(codes);



//encode the string to a coded version
function encode (str) {
        var output = "";
        for (var ch in str) {
                 output = output + codes[str[ch]];
        }
return output;
}
str = "aaabccdeeeeeffg";
console.log(encode(str));



//decoding fuction to return the result as the string
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
console.log(decode(tree,encode(str)));
                                                                               
