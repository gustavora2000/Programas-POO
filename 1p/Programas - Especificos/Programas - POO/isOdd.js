function isOdd(n){
    if (n%2!==0)
	return true;
    else
	return false;
}

function isEven(n){
    return !isOdd(n)
}
print(isOdd(3))
print(isOdd(4))
print(isEven(3))
print(isOdd(3))
