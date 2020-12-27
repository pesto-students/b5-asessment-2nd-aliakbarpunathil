const arrayCubeRootToJson = arr => {
	let hash =  {};
  arr.forEach(function (val) {
  if(val === Infinity || val === Number.NEGATIVE_INFINITY){
  	console.log("In");
  	hash[val.toString()] = Math.cbrt(val);
  	return;
    }
	if(Number.isInteger(parseInt(val))){
  	hash[val.toString()] = Math.cbrt(val);
  }
  else
  	throw '';
});
 return hash;
};
export { arrayCubeRootToJson };
