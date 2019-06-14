function convert() {
    let t = document.getElementById("km").value
    let o = (t)/1.609
    document.getElementById("out").innerHTML = o.toFixed(2) + " millas"
}

function convert1() {
    let t = document.getElementById("mk").value
    let o = t*1.609
    document.getElementById("out1").innerHTML = o.toFixed(2) + " kilometros"
}