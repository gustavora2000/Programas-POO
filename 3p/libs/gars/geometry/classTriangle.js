class Triangle{
    constructor(puntoA, puntoB, puntoC)
    {
        this.puntoA = puntoA
        this.puntoB = puntoB
        this.puntoC = puntoC
    }

    toString()
    {
        console.log("PuntoA: " + this.puntoA + ", " + "PuntoB: " + this.puntoB + ", " + "PuntoC:" + this.puntoC)
    }
    
}

module.exports = Triangle