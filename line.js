function Line(x1, y1, x2, y2) {
    Shape.call(this, "line", {x1: x1, y1: y1, x2: x2, y2: y2});
}
Line.prototype = Object.create(Shape.prototype);
Line.prototype.constructor = Line;