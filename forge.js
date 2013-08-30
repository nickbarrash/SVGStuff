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
  Shape.call(this, "ellipse", [
    new Attribute("cx", cx), 
    new Attribute("cy", cy), 
    new Attribute("rx", r),
    new Attribute("ry", r)
  ]);
}


function SkewEllipse(id, sx, sy) {
    $("#"+id).attr("rx", $("#"+id).attr("rx") * sx);
    $("#"+id).attr("ry", $("#"+id).attr("ry") * sy);
}

function moveEllipse(id, tx, ty) {
    $("#"+id).attr("cx", $("#"+id).attr("cx") + tx);
    $("#"+id).attr("cy", $("#"+id).attr("cy") + ty);
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;



window.onload = function() {
    var myrect = new Rect(10,10,10,10,0,0);
    var mycircle = new Circle(150,100,10);
    $("#canvas").append(myrect.create());
    $("#canvas").append(mycircle.create());
    SkewEllipse(1, 10,1);
   // moveEllipse(1, 40, 40);
}