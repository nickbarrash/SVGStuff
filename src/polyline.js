function Polyline(points) {
    Shape.call(this, "polyline", {points: points});
}
Polyline.prototype = Object.create(Shape.prototype);
Polyline.prototype.constructor = Polyline;