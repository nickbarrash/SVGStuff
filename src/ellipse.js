function Ellipse(cx, cy, rx, ry) {
    Shape.call(this, "ellipse", {cx: cx, cy: cy, rx: rx, ry: ry});
}
Ellipse.prototype = Object.create(Shape.prototype);
Ellipse.prototype.constructor = Ellipse;

Ellipse.prototype.move = function(dx, dy) {
    this.attributes.cx += dx;
    this.attributes.cy += dy;
    this.draw();
}