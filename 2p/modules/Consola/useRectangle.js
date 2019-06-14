const point = require("../../../libs/gars/geometry/Point")
const Rectangle = require("../../../libs/gars/geometry/classRectangle")

let punto1 = new point(-3,5)
let punto2 = new point(5,-7)

let rectangle1 = new Rectangle(punto1, punto2)

rectangle1.toString()

