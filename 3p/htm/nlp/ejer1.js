function imprimir() {
    let t = document.getElementById("textarea").value
    let b = 0;
    for(let c = 0; c < t.length; c++)
    {
            if (t[c] === ' '){
                b = b 
            }else{
                b = b + 1
            }
    }
    
    let a = t.split(' ')
    document.getElementById("out").innerHTML = b + ": caracteres"
    document.getElementById("out1").innerHTML = a.length + " palabras"
   
}
