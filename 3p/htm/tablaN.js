let a = prompt("Ingresa un valor");
let res =0;
for(let x =1; x<=10; x++){
res = res + a*x + "<br>";
}
document.getElementById("msg").innerHTML = res;