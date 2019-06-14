var isNumber = function(x) {
    //function isNumber(x) {
    if (typeof x === 'number')
	return true;
    else
	return false;
}

function isZero(arg){
    if (arg===0)
	throw new Error('zero div');
    else
	return arg;
}

function div(a,b)
{
    if (isNumber(a) && isNumber(b) && isZero(b))
    {
       return (a/b);

    }
}

print(div(3,0))

