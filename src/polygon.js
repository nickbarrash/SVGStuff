function Polygon(points) {
    Shape.call(this, "polygon", {points: points});
}
Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;