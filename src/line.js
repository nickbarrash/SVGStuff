function Line(x1, y1, x2, y2) {
    Shape.call(this, "line", {x1: x1, y1: y1, x2: x2, y2: y2});
}
Line.prototype = Object.create(Shape.prototype);
Line.prototype.constructor = Line;

Line.prototype.move = function(dx, dy) {
    this.attributes.x1 += dx;
    this.attributes.x2 += dx;
    this.attributes.y1 += dy;
    this.attributes.y2 += dy;
    this.draw();
}