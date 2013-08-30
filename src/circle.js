function Circle(cx, cy, r) {
    Shape.call(this, "rect", {cx: cx, cy: cy, r: r});
} 
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;