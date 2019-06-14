class Rectangle {
    constructor(PuntoA, PuntoB)
    {
        this.PuntoA = PuntoA
        this.PuntoB = PuntoB
    }

    toString()
    {
        console.log("PuntoA: " + " (" + this.PuntoA.x + "," + this.PuntoA.y + ")" + "," + " PuntoB: " + " (" + this.PuntoB.x + "," + this.PuntoB.y + ") ")

    }

}

module.exports = Rectangle