var isNumber = function(x) {
    //function isNumber(x) {
    if (typeof x === 'number')
	return true;
    else
	return false;
}

function resta(a,b){
    if (isNumber(a) && isNumber(b)){
    return a-b;
    }
}
print(resta(9,800))
