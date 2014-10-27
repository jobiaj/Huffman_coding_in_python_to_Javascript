function getf(str) {
	var freq = {};
	var i = str.length;
	for (var j = 0; j<i; j++)
		{
			var chara = str.charAt(j);
			if (freq[chara])
				{	freq[chara]++;
				}
			else
				{
				freq[chara]=1;
				}
		}
		return freq;
	};

	
console.log(getf("jobi"))
