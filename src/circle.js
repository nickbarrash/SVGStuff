function Circle(cx, cy, r) {
    Shape.call(this, "rect", {cx: cx, cy: cy, r: r});
} 
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.move = function(dx, dy) {
    this.attributes.cx += dx;
    this.attributes.cy += dy;
    this.draw();
}