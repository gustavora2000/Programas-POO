function isPos(n)
{
	if (n>0)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function isNeg(n)
{
	return !isPos(n);
}

print(isPos(-5));
print(isNeg(4));