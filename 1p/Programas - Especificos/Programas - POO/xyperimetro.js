print("Escribe la cordenada 'x' & 'y' de la circunferencia: ");
print("x : ");
x = Number(readline());
print("y : ");
y = Number(readline());
print("Escriba el radio de la circunferencia: ");
r = Number(readline());
print("Escriba la cordenada 'x' & 'y' para saver si el punto esta dentro, sobre o al interior de la circunferencia dada: ");
print("x : ");
X = Number(readline());
print("y : ");
Y = Number(readline());

R1 = (Math.pow((X - x),2));
R2 = (Math.pow((Y - y),2));
R3 = (R1 + R2);

if (R3 < r)
{
	print ("Las cordenas del punto estan dentro de la circunferencia");
}
if (R3 > r)
{
	print ("Las cordenas del punto estan fuera de la circunferencia");
}
if (R3 == r)
{
	print ("Las cordenas del punto estan sobre de la circunferencia");
}



