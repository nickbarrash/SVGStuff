function Polygon(points) {
    Shape.call(this, "polygon", {points: points});
}
Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.move = function(dx, dy) {
    for (var i = 0; i < this.attributes.points.length - 1; i += 2) {
        this.attributes.points[i] += dx;
        this.attributes.points[i + 1] += dy;
    }
    this.draw();
}