function rand() {

	let tempNum = 0
	let min = 100
	let max = 0
	let avg = 0
	let datos = ""

	let random = ""
	let n = document.getElementById('numero').value
	alert(n)

	for(let i = 0; i < n; i++){

	tempNum = (Math.random() * 100) + 1;


	if (tempNum>max) {
		max = tempNum;
	}



	if (tempNum<min) {
		min = tempNum;
	}



	 avg += tempNum;


    random = random + "\n" + (tempNum).toString();

  }

  avg /= n;
  datos = "No. Maximo: " + max + "\n" + "No. Minimo: " + min + "\n" + "Promedio: " + avg


  document.getElementById("datos").innerHTML = datos;
  document.getElementById("output").innerHTML = random;


  
}