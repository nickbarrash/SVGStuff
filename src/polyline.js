function Polyline(points) {
    Shape.call(this, "polyline", {points: points});
}
Polyline.prototype = Object.create(Shape.prototype);
Polyline.prototype.constructor = Polyline;

Polyline.prototype.move = function(dx, dy) {
    for (var i = 0; i < this.attributes.points.length - 1; i += 2) {
        this.attributes.points[i] += dx;
        this.attributes.points[i + 1] += dy;
    }
    this.draw();
}