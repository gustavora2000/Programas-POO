function imprimir() {
    let t = document.getElementById("textarea").value
    let b = 0;
    var x = [];
    for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
    for (k = 0; k < c.length; k++) {
      x.push([a[i], b[j], c[k]]);
       }
      }
     }
    console.log(x);
    document.getElementById("out").innerHTML = x + ": Convinaciones igual a 0..."
   
}