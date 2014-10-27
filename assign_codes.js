function assignCodes (node, pat) {
     pat = pat || "";
     if (typeof node == typeof "") {
         codes[node] = pat;       
     }       
     else {                               
         assignCodes(node[0], pat+"0");   
         assignCodes(node[1], pat+"1");
     }
tree= trimTree(buildTree(sortFreq("aaaaabbbcccccdeeeeee")));
assigncodes(tree);
console.log(tree)
