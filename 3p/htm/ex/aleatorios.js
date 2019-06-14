function imprimir() {
    let aleatorio;
    let x;
    for(let a = 0; a < 10; a++)
    {
    aleatorio = Math.random() + "\n";
    x = x + aleatorio;
    }
    document.getElementById("textarea").innerHTML = x
    
}