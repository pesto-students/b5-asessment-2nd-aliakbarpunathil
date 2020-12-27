function balancedBraces(str) {
	let customStack = [];
	const allowedBraces = ['{', '[', '(', ')', '}', ']'];
	hashClosed = {
		'}': '{',
		']': '[',
		')': '('
	};
	bracesString = str.split("").filter(function (singleChar) {
		return allowedBraces.includes(singleChar);
	});

	for (var i = 0; i < bracesString.length; i++) {

		if (customStack[customStack.length - 1] === hashClosed[bracesString[i]] && customStack[customStack.length - 1] != undefined)
			customStack.pop();
		else
			customStack.push(bracesString[i]);
		console.log(customStack);
	}
	if (customStack.length > 0)
		return false;
	else
		return true;
}

export {
	balancedBraces,
};