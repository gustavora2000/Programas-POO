a = 5;
b = 5;
c = 5;

s = ((1/2) * (a + b + c));
A = (a * b * c);
B = (s * (s - a) * (s - b) * (s - c))
C = Math.pow(B, 0.25);
if ( B < 0)
{
	Print("El radicando de la raiz cuadrada es negativa, por lo tanto no existe su raiz"); 
}
else
{
	print(" ");
}
R = (A / C);
print(" R = " + R);
