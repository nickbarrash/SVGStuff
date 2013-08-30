function Attribute(key, value) {
    this.key = key;
    this.value = value;
}

function Shape(type, attributes) {
    this.type = type;
    this.attributes = attributes;
}

Shape.prototype.create = function() {
    var shape = document.createElementNS("http://www.w3.org/2000/svg", this.type);
    for (var i = 0; i < this.attributes.length; i++) {
        shape.setAttributeNS(null, this.attributes[i].key, this.attributes[i].value);  
    }
    return shape;
}
function Circle(cx, cy, r) {
    Shape.call(this, "circle", [new Attribute("cx",cx), new Attribute("cy",cy), new Attribute("r",r)]);
}    
Circle.prototype = new Shape;
Circle.prototype.constructor = Circle;

window.onload = function() {
    var mycircle = new Circle(150,100,10);
    $("#canvas").append(mycircle.create());
}