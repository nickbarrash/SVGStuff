var shapeId = 0;
var shapesArray = new Array();

function Attribute(key, value) {
    this.key = key;
    this.value = value;
}

function Shape(type, attributes) {
    this.type = type;
    this.id = shapeId;
    shapeId += 1;
    this.attributes = attributes;
}
Shape.prototype.create = function() {
    var shape = document.createElementNS("http://www.w3.org/2000/svg", this.type);
    shape.setAttributeNS(null, "id", this.id);
    for (var i = 0; i < this.attributes.length; i++) {
        shape.setAttributeNS(null, this.attributes[i].key, this.attributes[i].value);  
    }
    return shape;
}

function Rect(x, y, width, height, rx, ry) {
    if (rx === undefined) {
        rx = 0;
        ry = 0;
    } else if (ry === undefined) {
        ry = rx;
    }
    Shape.call(this, "rect", [
        new Attribute("x", x), 
        new Attribute("y", y),
        new Attribute("width", width),
        new Attribute("height", height),
        new Attribute("rx", rx),
        new Attribute("ry", ry)
    ]);
}
Rect.prototype = Object.create(Shape.prototype);
Rect.prototype.constructor = Rect;

function Circle(cx, cy, r) {
    Shape.call(this, "rect", [
        new Attribute("cx", cx), 
        new Attribute("cy", cy),
        new Attribute("r", r)
    ]);
} 
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Ellipse(cx, cy, rx, ry) {
    Shape.call(this, "ellipse", [
        new Attribute("cx", cx), 
        new Attribute("cy", cy), 
        new Attribute("rx", rx),
        new Attribute("ry", ry)
    ]);
}
Ellipse.prototype = Object.create(Shape.prototype);
Ellipse.prototype.constructor = Ellipse;

function Line(x1, y1, x2, y2) {
    Shape.call(this, "line", [
        new Attribute("x1", x1),
        new Attribute("y1", y1),
        new Attribute("x2", x2),
        new Attribute("y2", y2)
    ]);
}
Line.prototype = Object.create(Shape.prototype);
Line.prototype.constructor = Line;

function Polyline(points) {
    Shape.call(this, "polyline", [
        new Attribute("points", points)
    ]);
}
Polyline.prototype = Object.create(Shape.prototype);
Polyline.prototype.constructor = Polyline;

function Polygon(points) {
    Shape.call(this, "polygon", [
        new Attribute("points", points)
    ]);
}
Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

function SkewEllipse(id, sx, sy) {
    $("#"+id).attr("rx", $("#"+id).attr("rx") * sx);
    $("#"+id).attr("ry", $("#"+id).attr("ry") * sy);
}

function moveEllipse(id, tx, ty) {
    $("#"+id).attr("cx", $("#"+id).attr("cx") + tx);
    $("#"+id).attr("cy", $("#"+id).attr("cy") + ty);
}

function draw(shape) {
    $("#canvas").append(shape.create());
}

window.onload = function() {
    draw(new Rect(400,10,100,100));
    draw(new Ellipse(150,100,10,10));
    draw(new Line(10,10,50,50));
    draw(new Polyline([20,20,60,60,20,60,60,20]));
    draw(new Polygon([350,75,379,161,469,161,397,215,423,301,350,250,277,301,303,215,231,161,321,161]));
    SkewEllipse(1, 10,1);
   // moveEllipse(1, 40, 40);
}