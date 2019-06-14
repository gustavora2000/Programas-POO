const Point = require("../../../libs/gars/geometry/Point")
const Triangle = require("../../../libs/gars/geometry/classTriangle")

let punto1 = new Point(3, -5)
let punto2 = new Point(-2, 4)
let punto3 = new Point(4, -2)

let Triangle1 = new Triangle(punto1, punto2, punto3)

Triangle1.toString()
