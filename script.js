function firstWord(s) {
  // your code here
	let newStr = s.trim();
	let strArr = newStr.split(' '); 
	return strArr[0];
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
