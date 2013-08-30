var shapeId = 0;
var array = new Array();

function Attribute(key, value) {
    this.key = key;
    this.value = value;
}

function Shape(type, attributes) {
    this.type = type;
    this.id = "id";
    this.attributes = attributes;
}

Shape.prototype.create = function() {
    var shape = document.createElementNS("http://www.w3.org/2000/svg", this.type);
    shape.setAttributeNS(null, this.id, shapeId);
    shapeId += 1;
    for (var i = 0; i < this.attributes.length; i++) {
        shape.setAttributeNS(null, this.attributes[i].key, this.attributes[i].value);  
    }
    return shape;
}
function Circle(cx, cy, r) {
    Shape.call(this, "ellipse", [new Attribute("cx",cx), new Attribute("cy",cy), new Attribute("rx",r), new Attribute("ry",r)]);
}    

function SkewEllipse(id, sx, sy) {
    $("#"+id).attr("rx", $("#"+id).attr("rx") * sx);
    $("#"+id).attr("ry", $("#"+id).attr("ry") * sy);
}

function moveEllipse(id, tx, ty) {
    $("#"+id).attr("tx", $("#"+id).attr("cx") + tx);
    $("#"+id).attr("ty", $("#"+id).attr("cy") + ty);
}

Circle.prototype = new Shape;
Circle.prototype.constructor = Circle;

window.onload = function() {
    var mycircle = new Circle(150,100,10);
    $("#canvas").append(mycircle.create());
    mycircle = new Circle(400,50,10);
    $("#canvas").append(mycircle.create());
    SkewEllipse(0, 10,1);
    SkewEllipse(1, 3,6);
    moveEllipse(1, 400, 300);
}