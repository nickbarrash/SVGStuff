function Text(text, x, y, dx, dy, rotate, textLength, lengthAdjust) {
    this.text = text;
    Shape.call(this, "text", {x: x, y: y, dx: dx, dy: dy, rotate: rotate, textLength: textLength, lengthAdjust: lengthAdjust});
}
Text.prototype = Object.create(Shape.prototype);
Text.prototype.constructor = Text;

Text.prototype.create = function() {
    var shape = Shape.prototype.create.call(this);
    $(shape).append(this.text);
    return shape;
}
Text.prototype.move = function(dx, dy) {
    this.attributes.x += dx;
    this.attributes.y += dy;
    this.draw();
}