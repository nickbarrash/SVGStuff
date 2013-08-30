function Rect(x, y, width, height, rx, ry) {
    if (rx === undefined) {
        rx = 0;
        ry = 0;
    } else if (ry === undefined) {
        ry = rx;
    }
    Shape.call(this, "rect", {x: x, y: y, width: width, height: height, rx: rx, ry: ry});
}
Rect.prototype = Object.create(Shape.prototype);
Rect.prototype.constructor = Rect;